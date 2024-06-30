import Box from "./box";

export default class AmazonBox implements Box{
    constructor(public items:Box[]){}
    calcPrice(): number {
        return this.items.reduce((prev, item):number => {return prev + item.calcPrice()}, 0);
    }
}