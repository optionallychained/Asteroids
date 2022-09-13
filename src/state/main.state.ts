import { Angle, Keys, State, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';
import { Bullet } from '../entity/bullet.entity';
import { Player } from '../entity/player.entity';
import { Physics } from '../system/physics.system';
import { Wrap } from '../system/wrap.system';

// tmp fire rate limiting for testing
const fireInterval = 15;
let counter = fireInterval;

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.addSystem(Wrap);
        game.addSystem(Physics);

        game.world.addEntity(new Player());
    },
    end: () => { },
    tick: (game) => {
        const player = game.world.filterEntitiesByTag('player')[0]?.getComponent<Transform>('Transform');

        if (player) {
            if (game.input.isKeyDown(Keys.A) || game.input.isKeyDown(Keys.ARROW_LEFT)) {
                player.rotate(Angle.toRadians(-2));
            }
            else if (game.input.isKeyDown(Keys.D) || game.input.isKeyDown(Keys.ARROW_RIGHT)) {
                player.rotate(Angle.toRadians(2));
            }

            if (game.input.isKeyDown(Keys.W) || game.input.isKeyDown(Keys.ARROW_UP)) {
                player.accelerate(new Vec2(0, 5));
            }
            else {
                player.decelerate(new Vec2(0, -4));
            }

            // quick fire testing
            if (counter >= fireInterval && (game.input.isKeyDown(Keys.SPACE) || game.input.isKeyDown(Keys.ARROW_DOWN))) {
                game.world.addEntity(new Bullet(player.position, player.angle));
                counter = 0;
            }

            counter++;
        }
    }
});
