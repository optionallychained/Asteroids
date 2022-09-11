import { BoxCollider, Color, Entity, FlatColor, Geometries, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';

export class Player extends Entity {

    constructor() {
        super({
            tag: 'player',
            components: [
                new Transform(new Vec2(0, 0), new Vec2(35, 35), 0, new Vec2(650, 0)),
                new Model(Geometries.SQUARE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.green()),
                new BoxCollider()
            ]
        });
    }
}
