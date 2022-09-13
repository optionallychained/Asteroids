import { BoxCollider, Color, Entity, FlatColor, Game, Geometries, Model, Shader, ShaderPrograms, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';

export class Bullet extends Entity {

    constructor(position: Vec2, angle: number) {
        super({
            tag: 'bullet',
            components: [
                new Transform(position, new Vec2(10, 10), angle, new Vec2(0, 300)),
                new Model(Geometries.Wireframe.TRIANGLE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.white()),
                new BoxCollider()
            ]
        });
    }

    public tick(game: Game): void {
        const { position, scale } = this.getComponent<Transform>('Transform');

        if (
            position.x - scale.x / 2 >= game.world.dimensions.x / 2
            ||
            position.x + scale.x / 2 <= -game.world.dimensions.x / 2
            ||
            position.y - scale.y / 2 >= game.world.dimensions.y / 2
            ||
            position.y + scale.y / 2 <= -game.world.dimensions.y / 2
        ) {
            game.world.removeEntity(this);
        }
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'asteroid') {
            game.world.removeEntity(this);
        }
    }
}
