import { Game, System, Transform, Vec2 } from 'aura-2d';
import { MaxSpeed } from '../component/maxSpeed.component';
import { Thrust } from '../component/thrust.component';

export class Physics extends System {

    constructor() {
        super('Physics');
    }

    public tick(game: Game, frameDelta: number): void {
        for (const mover of game.world.filterEntitiesByComponentName('Transform')) {
            const transform = mover.getComponent<Transform>('Transform');

            if (mover.hasComponents('Thrust', 'MaxSpeed')) {
                const thrust = mover.getComponent<Thrust>('Thrust').value;
                const maxSpeed = mover.getComponent<MaxSpeed>('MaxSpeed').value;

                if (thrust) {
                    const acceleration = Vec2.scale(transform.up, thrust);

                    transform.velocity.set(
                        Math.max(Math.min(transform.velocity.x + acceleration.x, maxSpeed), -maxSpeed),
                        Math.max(Math.min(transform.velocity.y + acceleration.y, maxSpeed), -maxSpeed)
                    );
                }
                else {
                    const x = Math.abs(transform.velocity.x);
                    const y = Math.abs(transform.velocity.y);

                    transform.velocity.set(
                        Math.max(x - x * 0.015, 0) * (transform.velocity.x < 0 ? -1 : 1),
                        Math.max(y - y * 0.015, 0) * (transform.velocity.y < 0 ? -1 : 1)
                    );
                }

                transform.translate(Vec2.scale(transform.velocity, frameDelta / 1000));
            }
            else {
                transform.move(Vec2.scale(transform.velocity, frameDelta / 1000));
            }
        }
    }
}
