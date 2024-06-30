import Box from "./box";

export default class Item implements Box{
    constructor(public cost:number, public name:string ){}
    calcPrice(): number {
        console.log(`item: ${this.name} cost: ${this.cost}`);
        return this.cost
    }
}