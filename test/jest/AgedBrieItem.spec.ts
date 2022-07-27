
import { Item } from "@/Item";
import { AgedBrieItem } from "@/AgedBrieItem";



describe(('Aged Brie test '), () => {
  const agedBrie = new AgedBrieItem();




  it('should return when quality is less then 5', () => {
    const item: AgedBrieItem = new AgedBrieItem(2, 3);
    const result: AgedBrieItem = new AgedBrieItem(1, 6);

    const response = agedBrie.execute(item);
    expect(response).toStrictEqual(result);

  })

  it('should return when quality is less then 10', () => {
    const item: AgedBrieItem = new AgedBrieItem(10, 3);
    const result: AgedBrieItem = new AgedBrieItem(9, 5);

    const response = agedBrie.execute(item);
    expect(response).toStrictEqual(result);

  })

  it('should return when quality is grater then 10', () => {
    const item: AgedBrieItem = new AgedBrieItem(50, 3);
    const result: AgedBrieItem = new AgedBrieItem(49, 4);

    const response = agedBrie.execute(item);
    expect(response).toStrictEqual(result);

  })

  it('should return when quality is less then 0', () => {
    const item: AgedBrieItem = new AgedBrieItem(0, 3);
    const result: AgedBrieItem = new AgedBrieItem(0, 0);

    const response = agedBrie.execute(item);
    expect(response).toStrictEqual(result);

  })
})