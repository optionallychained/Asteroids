import { Game, ShaderVariableResolver, Vec2 } from 'aura-2d';
import { ExplosionData } from './component/explosionData.component';
import { PROGRAM_EXPLOSION } from './shader/program/explosion.program';
import { MAIN_STATE } from './state/main.state';

const game = new Game({
    canvasDimensions: new Vec2(1024, 768),
    states: [
        MAIN_STATE,
    ]
});

game.registerShader(PROGRAM_EXPLOSION);

// register resolvers for vertex_explosion u_Movement uniform + u_MovementMultiplier attribute
ShaderVariableResolver.registerEntityUniformResolver(
    'u_Movement',
    (e) => e.getComponent<ExplosionData>('ExplosionData').vertexMovement
);
ShaderVariableResolver.registerAttributeResolver(
    'a_MovementMultiplier',
    (e) => e.getComponent<ExplosionData>('ExplosionData').vertexMovementMultipliers
);

game.start(MAIN_STATE.name);
