import { ConjuredItem } from "@/ConjuredItem";


describe(('Conjured Items test '), () => {
    const conjured = new ConjuredItem();




    it('should return quality minus 2', () => {
        const item: ConjuredItem = new ConjuredItem(10, 3);
        const result: ConjuredItem = new ConjuredItem(9, 1);

        const response = conjured.execute(item);
        expect(response).toStrictEqual(result);

    })
    it('should return quality 0 and sell in 0', () => {
        const item: ConjuredItem = new ConjuredItem(0, 10);
        const result: ConjuredItem = new ConjuredItem(0, 0);

        const response = conjured.execute(item);
        expect(response).toStrictEqual(result);

    })



    
})
