import { FragmentShaders, ShaderProgram } from 'aura-2d';
import { VERTEX_EXPLOSION } from '../vertex/explosion.vertex';

// program combining the basic frag + "explosion" effect vert shaders
export const PROGRAM_EXPLOSION = new ShaderProgram({
    name: 'program_explosion',
    vertex: VERTEX_EXPLOSION,
    fragment: FragmentShaders.BASIC
});
