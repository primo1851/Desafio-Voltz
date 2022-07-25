import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class Backstage extends Item {

    constructor(
        sellIn?: number,
        quality?: number
    ) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
    }

     execute(item: Item) {
        if (VerifyItem.verifyQuality(item.quality)) {
            item.sellIn -= 1;
            item.quality += 1;
        }
    }
}