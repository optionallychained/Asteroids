import { Component, Entity, Game, Geometry, Model, Shader } from 'aura-2d';
import { ExplosionData } from '../component/explosionData.component';
import { PROGRAM_EXPLOSION } from '../shader/program/explosion.program';

// intermediate Entity superclass implementing explosion behavior, generalising for both players and asteroids
export abstract class Exploder extends Entity {

    public dead = false;

    private i: ReturnType<typeof setInterval> | undefined;

    constructor(tag: string, geometry: Geometry, components: Array<Component>) {
        super({
            tag,
            components: components.concat([
                new Model(geometry),
                new Shader(PROGRAM_EXPLOSION),
                new ExplosionData(geometry.vertexCount)
            ])
        });
    }

    public die(game: Game): void {
        const explosionData = this.getComponent<ExplosionData>('ExplosionData');

        this.i = setInterval(() => explosionData.vertexMovement += 0.0075, 50);
        this.dead = true;

        setTimeout(() => {
            clearInterval(this.i!);
            this.i = undefined;

            game.world.removeEntity(this);
        }, 3000);
    }
}
