import { Item } from "./Item";

export class GildedRose {
  constructor() {}

  updateQuality(items: Item[]): Item[] {
    for (let i = 0; i < items.length; i++) {
      items[i].execute(items[i]);
    }
    return items;
  }
}