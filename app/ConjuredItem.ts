

import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class ConjuredItem extends Item {

  constructor(
    name?: string,
    sellIn?: number,
    quality?: number
  ) {
    super(name, sellIn, quality)
  }

  execute(item: Item) {
    if (VerifyItem.verifyQuality(item.quality)) {
      item.sellIn--;
      item.quality -= 2;
    }
  }
}