import { Transform as BaseTransform, Vec2 } from 'aura-2d';

// Transform wrapper, adding acceleration
export class Transform extends BaseTransform {

    public acceleration = new Vec2();

    constructor(initialPosition: Vec2, initialScale: Vec2, initialAngle = 0, initialVelocity = new Vec2(), public readonly maxSpeed = 0) {
        super(initialPosition, initialScale, initialAngle, initialVelocity);
    }

    public accelerate(by: Vec2): void {
        this.acceleration = by;
    }

    public decelerate(by: Vec2): void {
        this.acceleration = by;
    }
}
