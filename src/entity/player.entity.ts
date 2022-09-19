import { BoxCollider, Color, Entity, FlatColor, Game, Transform, Vec2 } from 'aura-2d';
import { MaxSpeed } from '../component/maxSpeed.component';
import { Thrust } from '../component/thrust.component';
import { Wrappable } from '../component/wrappable.component';
import { SHIP } from '../geometry/ship.geometry';
import { Exploder } from './exploder.entity';

export class Player extends Exploder {

    constructor() {
        super('player', SHIP, [
            new Transform(new Vec2(), new Vec2(25, 45)),
            new FlatColor(Color.white()),
            // new BoxCollider(),
            new Wrappable(),
            new Thrust(7.5),
            new MaxSpeed(500)
        ]);
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'asteroid' && !(other as Exploder).dead) {
            this.die(game);
        }
    }
}
