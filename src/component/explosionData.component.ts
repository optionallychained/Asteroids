import { Component, Random } from 'aura-2d';

// component containing values for vertex_explosion u_Movement uniform + u_MovementMultiplier attribute
export class ExplosionData extends Component {

    public vertexMovement = 0;
    public readonly vertexMovementMultipliers: Float32Array;

    constructor(vertexCount: number) {
        super('ExplosionData');

        // random movement multiplier per vertex pair to produce "explosion" effect
        // pairing prevents individual lines from doing weird stuff like expanding or shrinking; they move as one piece, but indiviudally
        // nb: implicitly requires that vertexCount % 2 === 0 (geometry is GL_LINES)
        this.vertexMovementMultipliers = new Float32Array(vertexCount);
        for (let i = 0; i < vertexCount; i += 2) {
            const r = Random.between(-2, 2);
            this.vertexMovementMultipliers.set([r, r], i);
        }
    }
}
