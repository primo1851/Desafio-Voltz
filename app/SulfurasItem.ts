import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class SulfurasItem extends Item {

    constructor(
        
        sellIn?: number,
        
    ) {
        super("Sulfuras, Hand of Ragnaros", sellIn, 80)
    }

    execute(item: Item): Item{
        if (VerifyItem.verifySellIn(item.sellIn)) {
            item.sellIn = item.sellIn;
        }
        return item;
    }
}