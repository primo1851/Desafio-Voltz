
import { BackstageItem } from "@/BackstageItem";



describe(('Backsatge test'), () => {
    const backsatge = new BackstageItem();


    it('should return when quality is less then 5', () => {
        const item: BackstageItem = new BackstageItem(2, 3);
        const result: BackstageItem = new BackstageItem(1, 6);

        const response = backsatge.execute(item);
        expect(response).toStrictEqual(result);

    })

    it('should return when quality is less then 10', () => {
        const item: BackstageItem = new BackstageItem(10, 3);
        const result: BackstageItem = new BackstageItem(9, 5);

        const response = backsatge.execute(item);
        expect(response).toStrictEqual(result);

    })

    it('should return when quality is less then 0', () => {
        const item: BackstageItem = new BackstageItem(0, 3);
        const result: BackstageItem = new BackstageItem(0, 0);

        const response = backsatge.execute(item);
        expect(response).toStrictEqual(result);

    })
})