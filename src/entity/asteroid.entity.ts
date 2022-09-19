import { Angle, BoxCollider, Color, Entity, FlatColor, Game, Random, Transform, Vec2 } from 'aura-2d';
import { Wrappable } from '../component/wrappable.component';
import { ASTEROIDS } from '../geometry/asteroid.geometry';
import { Exploder } from './exploder.entity';

export class Asteroid extends Exploder {

    constructor(position: Vec2, private baseScale: Vec2, private stage = 1) {
        super('asteroid', ASTEROIDS[Math.ceil(Random.between(-1, 2))], [
            new Transform(
                position,
                Vec2.scale(baseScale, 1 / stage),
                Angle.toRadians(Random.between(0, 360)),
                new Vec2(Random.between(-150, 150), Random.between(-150, 150))
            ),
            new FlatColor(Color.white()),
            new BoxCollider(),
            new Wrappable()
        ]);
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'bullet' && !this.dead) {
            this.die(game);

            // asteroids progress in stages on death, "breaking apart" and shrinking:
            //   stage 1: 1 asteroid, base scale
            //   stage 2: 2 asteroids, 1/2 scale
            //   stage 3: 3 asteroids, 1/3 scale
            if (this.stage < 3) {
                for (let i = 0; i < this.stage + 1; i++) {
                    game.world.addEntity(new Asteroid(this.getComponent<Transform>('Transform').position, this.baseScale, this.stage + 1));
                }
            }
        }
    }
}
