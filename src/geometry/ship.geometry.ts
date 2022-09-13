import { Geometry, GLShape } from 'aura-2d';

const h = Math.sqrt(3) / 4;
export const SHIP = new Geometry({
    name: 'ship',
    vertices: Float32Array.from([
        -0.4, -h * 0.6,
        0.4, -h * 0.6,

        0.5, -h,
        0, h,

        0, h,
        -0.5, -h
    ]),
    vertexSize: 2,
    vertexCount: 6,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([

    ])
});
