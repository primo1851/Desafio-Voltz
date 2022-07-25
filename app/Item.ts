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

     execute(item: Item): void {
        if (VerifyItem.verifyQuality(item.quality)) {
            if (VerifyItem.verifySellIn(item.sellIn)) {
                item.sellIn--;
                item.quality--;
            }
            item.sellIn--;
            item.quality -= 2;

        }
    }

}


