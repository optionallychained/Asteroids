import { FragmentShader, UniformType, UniformVariation } from 'aura-2d';

export const FRAGMENT_EXPLOSION = new FragmentShader({
    name: 'fragment_explosion',
    source: `
        precision mediump float;

        uniform vec4 u_Color;

        varying float v_Alpha;

        void main() {
            gl_FragColor = vec4(u_Color.xyz, v_Alpha);
        }
    `,
    uniforms: [
        {
            name: 'u_Color',
            type: UniformType.VEC4,
            variation: UniformVariation.ENTITY
        }
    ]
});
