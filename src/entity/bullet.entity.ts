import { BoxCollider, Color, Entity, FlatColor, Game, Geometries, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';
import { Exploder } from './exploder.entity';

export class Bullet extends Entity {

    private ttl = 1000;

    constructor(position: Vec2, angle: number) {
        super({
            tag: 'bullet',
            components: [
                new Transform(position, new Vec2(10, 10), angle, new Vec2(0, 600)),
                new Model(Geometries.Wireframe.TRIANGLE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.white()),
                new BoxCollider()
            ]
        });
    }

    public tick(game: Game, frameDelta: number): void {
        this.ttl -= frameDelta;

        if (this.ttl <= 0) {
            game.world.removeEntity(this);
        }
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'asteroid' && !(other as Exploder).dead) {
            game.world.removeEntity(this);
        }
    }
}
