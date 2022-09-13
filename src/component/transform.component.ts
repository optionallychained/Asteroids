import { Transform as BaseTransform, Vec2 } from 'aura-2d';

// Transform wrapper, adding acceleration
export class Transform extends BaseTransform {

    public acceleration = new Vec2();

    constructor(initialPosition: Vec2, initialScale: Vec2, initialVelocity: Vec2, public readonly maxSpeed: number) {
        super(initialPosition, initialScale, 0, initialVelocity);
    }

    public accelerate(by: Vec2): void {
        this.acceleration = by;
    }

    public decelerate(by: Vec2): void {
        this.acceleration = by;
    }
}
