import { VerifyItem } from "@/VerifyItem";




describe(('Verify Items test '), () =>{
const verify = new VerifyItem();




it('should return true when sell in is higher then 0', () => {
    const item: VerifyItem = new VerifyItem();
  
    const response = VerifyItem.verifySellIn(2);
    expect(response).toStrictEqual(true);

  })

  

it('should return false when sell in is lower or iqual 0', () => {
  const item: VerifyItem = new VerifyItem();

  const response = VerifyItem.verifySellIn(0);
  expect(response).toStrictEqual(false);

})

it('should return true when quality in is higher then 0', () => {
  const item: VerifyItem = new VerifyItem();

  const response = VerifyItem.verifyQuality(6);
  expect(response).toStrictEqual(true);

})



it('should return false when quality in is lower or iqual 0', () => {
const item: VerifyItem = new VerifyItem();

const response = VerifyItem.verifyQuality(0);
expect(response).toStrictEqual(false);

})

})
