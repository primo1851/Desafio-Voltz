import { ConjuredItem } from "@/ConjuredItem";


describe(('Backsatge teste '), () => {
    const conjured = new ConjuredItem();


    it('should return test for cojured items', () => {
        const item: ConjuredItem = new ConjuredItem("Conjured Mana Cake",10, 3);
        const result: ConjuredItem = new ConjuredItem("Conjured Mana Cake",9, 1);

        const response = conjured.execute(item);
        expect(response).toStrictEqual(result);

    })

    
})