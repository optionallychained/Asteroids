import { Geometry, GLShape } from 'aura-2d';

// tmp selection of Exploder-compatible GL_LINES asteroid geoms

const ASTEROID_1 = new Geometry({
    name: 'asteroid_1',
    vertices: Float32Array.from([
        -0.5, -0.5,
        0.5, -0.5,

        0.5, -0.5,
        0.5, 0.5,

        0.5, 0.5,
        -0.5, 0.5,

        -0.5, 0.5,
        -0.5, -0.5,
    ]),
    vertexSize: 2,
    vertexCount: 8,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

const ASTEROID_2 = new Geometry({
    name: 'asteroid_2',
    vertices: Float32Array.from([
        -0.5, -0.5,
        0.5, -0.5,

        0.5, -0.5,
        0.5, 0.5,

        0.5, 0.5,
        -0.5, 0.5,

        -0.5, 0.5,
        -0.5, -0.5,
    ]),
    vertexSize: 2,
    vertexCount: 8,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

const ASTEROID_3 = new Geometry({
    name: 'asteroid_3',
    vertices: Float32Array.from([
        -0.5, -0.5,
        0.5, -0.5,

        0.5, -0.5,
        0.5, 0.5,

        0.5, 0.5,
        -0.5, 0.5,

        -0.5, 0.5,
        -0.5, -0.5,
    ]),
    vertexSize: 2,
    vertexCount: 8,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

export const ASTEROIDS = [ASTEROID_1, ASTEROID_2, ASTEROID_3];
