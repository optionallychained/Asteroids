import { Game, System, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';

// custom physics system working with custom Transform for accelerative movement
export class Physics extends System {

    constructor() {
        super('Physics');
    }

    public tick(game: Game, frameDelta: number): void {
        const movers = game.world.filterEntitiesByComponentName('Transform');

        for (const mover of movers) {
            const moverTransform = mover.getComponent<Transform>('Transform');

            moverTransform.velocity.set(
                Math.max(Math.min(moverTransform.velocity.x + moverTransform.acceleration.x, moverTransform.maxSpeed), 0),
                Math.max(Math.min(moverTransform.velocity.y + moverTransform.acceleration.y, moverTransform.maxSpeed), 0)
            );

            moverTransform.move(Vec2.scale(moverTransform.velocity, frameDelta / 1000));
        }
    }
}
