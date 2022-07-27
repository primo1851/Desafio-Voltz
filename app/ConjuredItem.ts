

import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class ConjuredItem extends Item {

  constructor(
    
    sellIn?: number,
    quality?: number
  ) {
    super("Conjured Mana Cake", sellIn, quality)
  }

  execute(item: Item): Item {
    if (VerifyItem.verifySellIn(item.sellIn)) {
      item.sellIn--;
      item.quality -=2;
    }
    return item;
  }
  
}