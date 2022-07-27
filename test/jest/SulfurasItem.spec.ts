import { SulfurasItem } from "@/SulfurasItem";




describe(('Aged Brie test '), () =>{
const sulfuras = new SulfurasItem();




it('should return when quality is less then 5', () => {
    const item: SulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros",2, 80);
    const result: SulfurasItem = new SulfurasItem("Sulfuras, Hand of Ragnaros",2, 80);

    const response = sulfuras.execute(item);
    expect(response).toStrictEqual(result);

  })

  
})