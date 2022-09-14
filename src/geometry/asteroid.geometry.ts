import { Geometry, GLShape } from 'aura-2d';

// selection of Exploder-compatible GL_LINES asteroid geoms

const ASTEROID_1 = new Geometry({
    name: 'asteroid_1',
    vertices: Float32Array.from([
        -0.5, 0.3,
        -0.5, -0.3,

        -0.5, -0.3,
        -0.2, -0.5,

        -0.2, -0.5,
        0.2, -0.5,

        0.2, -0.5,
        0.5, -0.35,

        0.5, -0.35,
        0.35, 0,

        0.35, 0,
        0.5, 0.15,

        0.5, 0.15,
        0.3, 0.45,

        0.3, 0.45,
        -0.05, 0.2,

        -0.05, 0.2,
        -0.25, 0.5,

        -0.25, 0.5,
        -0.5, 0.3
    ]),
    vertexSize: 2,
    vertexCount: 20,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

const ASTEROID_2 = new Geometry({
    name: 'asteroid_2',
    vertices: Float32Array.from([
        -0.5, -0.3,
        -0.2, -0.5,

        -0.2, -0.5,
        -0.1, -0.35,

        -0.1, -0.35,
        0.25, -0.5,

        0.25, -0.5,
        0.5, -0.2,

        0.5, -0.2,
        0.2, 0.1,

        0.2, 0.1,
        0.5, 0.2,

        0.5, 0.2,
        0.25, 0.5,

        0.25, 0.5,
        0, 0.35,

        0, 0.35,
        -0.2, 0.5,

        -0.2, 0.5,
        -0.5, 0.2,

        -0.5, 0.2,
        -0.25, -0.05,

        -0.25, -0.05,
        -0.5, -0.3
    ]),
    vertexSize: 2,
    vertexCount: 24,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

const ASTEROID_3 = new Geometry({
    name: 'asteroid_3',
    vertices: Float32Array.from([
        -0.5, 0.2,
        -0.5, -0.2,

        -0.5, -0.2,
        -0.2, -0.5,

        -0.2, -0.5,
        0.2, -0.35,

        0.2, -0.35,
        0.3, -0.45,

        0.3, -0.45,
        0.5, -0.2,

        0.5, -0.2,
        0.1, 0,

        0.1, 0,
        0.5, 0.2,

        0.5, 0.2,
        0.5, 0.3,

        0.5, 0.3,
        0.15, 0.5,

        0.15, 0.5,
        -0.2, 0.5,

        -0.2, 0.5,
        -0.1, 0.3,

        -0.1, 0.3,
        -0.5, 0.2
    ]),
    vertexSize: 2,
    vertexCount: 24,
    glShape: GLShape.LINES,
    textureCoordinates: Float32Array.from([])
});

export const ASTEROIDS = [ASTEROID_1, ASTEROID_2, ASTEROID_3];
