import { UniformType, UniformVariation, VertexShader } from 'aura-2d';

// vertex shader supporting positional variation, allowing an "explosion" effect on player/asteroid death
export const VERTEX_EXPLOSION = new VertexShader({
    name: 'vertex_explosion',
    source: `
        uniform mat3 u_Transform2D;
        uniform mat3 u_Projection;
        uniform mat3 u_View;

        // amount of "explosion" movement for all vertices
        uniform float u_Movement;

        attribute vec2 a_Position;

        // multiplier for "explosion" movement per vertex
        attribute float a_MovementMultiplier;

        void main() {
            gl_PointSize = 1.0;

            // produce the "explosion" effect by moving the vertex when u_Movement is nonzero
            vec3 position = vec3(a_Position + vec2(u_Movement * a_MovementMultiplier), 1.0);

            gl_Position = vec4(u_Projection * u_View * u_Transform2D * position, 1.0);
        }
    `,
    attributes: [
        {
            name: 'a_Position',
            size: 2
        },
        {
            name: 'a_MovementMultiplier',
            size: 1
        }
    ],
    uniforms: [
        {
            name: 'u_Transform2D',
            type: UniformType.MAT3,
            variation: UniformVariation.ENTITY
        },
        {
            name: 'u_Projection',
            type: UniformType.MAT3,
            variation: UniformVariation.STATIC
        },
        {
            name: 'u_View',
            type: UniformType.MAT3,
            variation: UniformVariation.STATIC
        },
        {
            name: 'u_Movement',
            type: UniformType.FLOAT,
            variation: UniformVariation.ENTITY
        }
    ]
});
