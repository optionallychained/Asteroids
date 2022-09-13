import { BoxCollider, Color, Entity, FlatColor, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';
import { SHIP } from '../geometry/ship.geometry';

export class Player extends Entity {

    constructor() {
        super({
            tag: 'player',
            components: [
                new Transform(new Vec2(0, 0), new Vec2(25, 45), 0, new Vec2(650, 0)),
                new Model(SHIP),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.white()),
                new BoxCollider()
            ]
        });
    }
}
