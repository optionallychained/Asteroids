import { State } from 'aura-2d';
import { Player } from '../entity/player.entity';
import { WrapSystem } from '../system/wrap.system';

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.addSystem(WrapSystem);

        game.world.addEntity(new Player());
    },
    end: (game) => { },
    tick: (game) => { }
});
