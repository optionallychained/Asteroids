import { BoxCollider, Color, Entity, FlatColor, Game, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';
import { Wrappable } from '../component/wrappable.component';
import { SHIP } from '../geometry/ship.geometry';
import { Exploder } from './exploder.entity';

export class Player extends Exploder {

    constructor() {
        super('player', SHIP, [
            new Transform(new Vec2(), new Vec2(25, 45), 0, new Vec2(), 200),
            new FlatColor(Color.white()),
            new BoxCollider(),
            new Wrappable()
        ]);
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'asteroid') {
            this.die(game);
        }
    }
}
