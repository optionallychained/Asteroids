import { Angle, Collision, Keys, Random, State, Transform, Vec2 } from 'aura-2d';
import { Thrust } from '../component/thrust.component';
import { Asteroid } from '../entity/asteroid.entity';
import { Bullet } from '../entity/bullet.entity';
import { Exploder } from '../entity/exploder.entity';
import { Player } from '../entity/player.entity';
import { Physics } from '../system/physics.system';
import { Wrap } from '../system/wrap.system';

// tmp fire rate limiting for testing
const fireInterval = 15;
let counter = fireInterval;

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.addSystems(Wrap, Physics, Collision);

        game.world.addEntity(new Player());

        // test asteroid
        for (let i = 0; i < 1; i++) {
            game.world.addEntity(new Asteroid(
                new Vec2(
                    Random.between(-game.world.dimensions.x / 2, game.world.dimensions.x / 2),
                    Random.between(-game.world.dimensions.y / 2, game.world.dimensions.y / 2)
                ),
                new Vec2(100, 100)
            ));
        }
    },
    end: () => { },
    tick: (game) => {
        const player = game.world.filterEntitiesByTag('player')[0] as Exploder | undefined;

        if (player) {
            const transform = player.getComponent<Transform>('Transform');
            const thrust = player.getComponent<Thrust>('Thrust');
            const dead = player.dead;

            if (!dead) {
                if (game.input.isKeyDown(Keys.A) || game.input.isKeyDown(Keys.ARROW_LEFT)) {
                    transform.rotate(Angle.toRadians(-5));
                }
                else if (game.input.isKeyDown(Keys.D) || game.input.isKeyDown(Keys.ARROW_RIGHT)) {
                    transform.rotate(Angle.toRadians(5));
                }

                if (game.input.isKeyDown(Keys.W) || game.input.isKeyDown(Keys.ARROW_UP)) {
                    thrust.on();
                }
                else {
                    thrust.off();
                }
            }

            // quick fire testing
            if (counter >= fireInterval && !dead && (game.input.isKeyDown(Keys.SPACE) || game.input.isKeyDown(Keys.ARROW_DOWN))) {
                game.world.addEntity(new Bullet(transform.position, transform.angle));
                counter = 0;
            }

            counter++;
        }
    }
});
