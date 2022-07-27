import { SulfurasItem } from "@/SulfurasItem";




describe(('Sulfuras Item test '), () =>{
const sulfuras = new SulfurasItem();




it('should return sell in and quality unchanged', () => {
    const item: SulfurasItem = new SulfurasItem(2);
    const result: SulfurasItem = new SulfurasItem(2);

    const response = sulfuras.execute(item);
    expect(response).toStrictEqual(result);

  })

  
})