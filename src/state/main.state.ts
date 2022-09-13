import { Angle, Keys, State, Vec2 } from 'aura-2d';
import { Transform } from '../component/transform.component';
import { Player } from '../entity/player.entity';
import { Physics } from '../system/physics.system';
import { WrapSystem } from '../system/wrap.system';

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.addSystem(WrapSystem);
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
        }
    }
});
