import { ConjuredItem } from "@/ConjuredItem";


describe(('Conjured Items test '), () => {
    const conjured = new ConjuredItem();


    it('should return quality minus 1', () => {
        const item: ConjuredItem = new ConjuredItem("Conjured Mana Cake",10, 3);
        const result: ConjuredItem = new ConjuredItem("Conjured Mana Cake",9, 1);

        const response = conjured.execute(item);
        expect(response).toStrictEqual(result);

    })

    
})