import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class AgedBrie extends Item {

    constructor(
        sellIn?: number,
        quality?: number
    ) {
        super('Aged Brie', sellIn, quality)
    }

    execute(item: Item) {
        if (VerifyItem.verifyQuality(item.quality)) {
            item.quality++;
            item.sellIn--;
        }

    }
}