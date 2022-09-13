import { BoxCollider, Color, FlatColor, Transform, Vec2 } from 'aura-2d';
import { SHIP } from '../geometry/ship.geometry';
import { Exploder } from './exploder.entity';

export class Player extends Exploder {

    constructor() {
        super('player', SHIP, [
            new Transform(new Vec2(), new Vec2(25, 45)),
            new FlatColor(Color.white()),
            new BoxCollider()
        ]);
    }
}
