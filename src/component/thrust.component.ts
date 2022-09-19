import { Component } from 'aura-2d';

export class Thrust extends Component {

    private v = 0;

    constructor(private readonly power: number) {
        super('Thrust');
    }

    public get value(): number {
        return this.v;
    }

    public on(): void {
        this.v = this.power;
    }

    public off(): void {
        this.v = 0;
    }
}
