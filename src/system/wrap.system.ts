import { Game, System, Transform, Vec2 } from 'aura-2d';

export class Wrap extends System {

    constructor() {
        super('Wrap');
    }

    public tick(game: Game): void {
        for (const wrapper of game.world.filterEntitiesByComponentName('Transform')) {
            const transform = wrapper.getComponent<Transform>('Transform'),
                left = transform.position.x - transform.scale.x * 0.5,
                right = transform.position.x + transform.scale.x * 0.5,
                bottom = transform.position.y - transform.scale.y * 0.5,
                top = transform.position.y + transform.scale.y * 0.5;

            if (left >= game.world.dimensions.x / 2) {
                transform.translate(new Vec2(-game.world.dimensions.x - transform.scale.x, 0));
            }
            else if (right <= -game.world.dimensions.x / 2) {
                transform.translate(new Vec2(game.world.dimensions.x + transform.scale.x, 0));
            }

            if (bottom >= game.world.dimensions.y / 2) {
                transform.translate(new Vec2(0, -game.world.dimensions.y - transform.scale.y));
            }
            else if (top <= -game.world.dimensions.y / 2) {
                transform.translate(new Vec2(0, game.world.dimensions.y + transform.scale.y));
            }
        }
    }
}
