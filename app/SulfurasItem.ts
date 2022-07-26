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

    execute(item: Item) {
        if (VerifyItem.verifySellIn(item.sellIn)) {
            item.sellIn = item.sellIn;
            item.quality = 80;
        }
    }
}