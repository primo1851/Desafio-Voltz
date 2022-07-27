import { Item } from "@/Item";

describe(('Items test '), () =>{
const test = new Item();




it('should return quality minus 1', () => {
    const item: Item = new Item("foo",2, 6);
    const result: Item = new Item("foo",1, 5);

    const response = test.execute(item);
    expect(response).toStrictEqual(result);

  })

  it('should return quality 0 when sell in is 0', () => {
    const item: Item = new Item("foo",0, 6);
    const result: Item = new Item("foo",0, 0);

    const response = test.execute(item);
    expect(response).toStrictEqual(result);

  })

  
})