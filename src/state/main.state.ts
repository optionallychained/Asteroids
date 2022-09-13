import { Angle, Keys, State, Transform, Vec2 } from 'aura-2d';
import { Exploder } from '../entity/exploder.entity';
import { Player } from '../entity/player.entity';
import { WrapSystem } from '../system/wrap.system';

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.addSystem(WrapSystem);

        game.world.addEntity(new Player());

        // explosion effect test
        setTimeout(() => {
            game.world.filterEntitiesByComponentName('ExplosionData').forEach((e) => (e as Exploder).die())
        }, 5000);
    },
    end: (game) => { },
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
                player.move(new Vec2(0, 2))
            }
        }
    }
});
