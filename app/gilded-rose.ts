import {  AgedBrieItem } from "./AgedBrieItem";
import { Item } from "./Item";
import { BackstageItem } from "./BackstageItem";
import { SulfurasItem } from "./SulfurasItem";
import { ConjuredItem } from "./ConjuredItem";


export class GildedRose {
  constructor(
    private readonly agedBrieCaller: AgedBrieItem,
    private readonly backstageCaller: BackstageItem,
    private readonly sulfurasCaller: SulfurasItem,
    private readonly conjuredCaller: ConjuredItem,
    private readonly itemCaller: Item
    ) {
  }

  updateQuality(items: Item[]): Item[] {

    for (let i = 0; i < items.length; i++) {

      switch(items[i].name)
      {
        case this.agedBrieCaller.name:
          this.agedBrieCaller.execute(items[i])
          break;

        case this.backstageCaller.name:
          this.backstageCaller.execute(items[i])
          break;
        
        case this.sulfurasCaller.name:
          this.sulfurasCaller.execute(items[i])
          break;
        
        case this.conjuredCaller.name:
          this.conjuredCaller.execute(items[i])
          break;

        default:
          this.itemCaller.execute(items[i])
          break;


      }
    }
    return items;
  }
}