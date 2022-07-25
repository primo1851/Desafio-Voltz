

import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class Conjured extends Item {

  constructor(
    name?: string,
    sellIn?: number,
    quality?: number
  ) {
    super(name, sellIn, quality)
  }

  execute(item: Item) {
    if (VerifyItem.verifyQuality(item.quality)) {
      item.sellIn -= 1;
      item.quality -= 2;
    }
  }
}