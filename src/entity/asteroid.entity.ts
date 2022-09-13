import { BoxCollider, Color, Entity, FlatColor, Game, Geometries, Model, Random, Shader, ShaderPrograms, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';
import { Wrappable } from '../component/wrappable.component';

// asteroids progress in stages on death, "breaking apart" and shrinking:
//   stage 1: 1 asteroid, base scale
//   stage 2: 2 asteroids, 1/2 scale
//   stage 3: 3 asteroids, 1/3 scale
export class Asteroid extends Entity {

    constructor(position: Vec2, private baseScale: Vec2, private stage = 1) {
        super({
            tag: 'asteroid',
            components: [
                // tmp
                new Model(Geometries.Wireframe.SQUARE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.white()),
                new BoxCollider(),
                new Wrappable()
            ]
        });

        const scale = Vec2.scale(baseScale, 1 / stage);
        this.addComponent(new Transform(position, scale, 0, new Vec2(Random.between(-150, 150), Random.between(-150, 150))));
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'bullet') {
            game.world.removeEntity(this);

            if (this.stage < 3) {
                for (let i = 0; i < this.stage + 1; i++) {
                    game.world.addEntity(new Asteroid(this.getComponent<Transform>('Transform').position, this.baseScale, this.stage + 1));
                }
            }
        }
    }
}
