import { AgedBrie } from "@/AgedBrie";
import { Backstage } from "@/Backstage";
import { Conjured } from "@/Conjured";
import { GildedRose } from "@/gilded-rose"
import { Item } from "@/Item"
import { Sulfuras } from "@/Sulfuras";

describe(('Gilded Rose test'), () => {
  const agedBrie = new AgedBrie();
  const backstage = new Backstage();
  const sulfuras = new Sulfuras();
  const conjured = new Conjured();

  const gildedRose = new GildedRose(agedBrie, backstage, sulfuras, conjured);

  it('should call gilded rose with AgedBrie', () => {
    const item: AgedBrie = new AgedBrie(2, 3);
    const input: Array<Item> = [item];

    const result: AgedBrie = new AgedBrie(1, 4)

    const response = gildedRose.updateQuality(input)

    expect(response).toStrictEqual([result])


  })

  it('should call gilded rose with Backstage', () => {
    const item: Backstage = new Backstage(2, 3);
    const input: Array<Item> = [item];

    const result: Backstage = new Backstage(1, 4)
    const response = gildedRose.updateQuality(input)

    expect(response).toStrictEqual([result])


  })

  it('should call gilded rose with Sulfuras', () => {
    const item: Sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 2, 80);
    const input: Array<Item> = [item];

    const result: Sulfuras = new Sulfuras("Sulfuras, Hand of Ragnaros", 1, 80)

    const response = gildedRose.updateQuality(input)

    expect(response).toStrictEqual([result])


  })

  it('should call gilded rose with Conjured', () => {
    const item: Conjured = new Conjured("Conjured Mana Cake", 2, 3);
    const input: Array<Item> = [item];

    const result: Conjured = new Conjured("Conjured Mana Cake", 1, 1)

    const response = gildedRose.updateQuality(input)

    expect(response).toStrictEqual([result])


  })




})