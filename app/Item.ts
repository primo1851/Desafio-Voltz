import { VerifyItem } from "./VerifyItem";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name?: string, sellIn?: number, quality?: number) {
        this.name = name!;
        this.sellIn = sellIn!;
        this.quality = quality!;
    }

    execute(item: Item): Item {
        if (VerifyItem.verifySellIn(item.sellIn)) {
            if (VerifyItem.verifyQuality(item.quality)) {
                item.sellIn--;
                item.quality--;
            }             
        }
        
        return item;
    }

}




