import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class SulfurasItem extends Item {

    constructor(
        name?: string,
        sellIn?: number,
        quality?: number
    ) {
        super(name, sellIn, quality)
    }

    execute(item: Item): Item {

        item.sellIn = item.sellIn;
        item.quality = 80;


        return item;
    }
}