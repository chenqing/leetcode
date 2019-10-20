import { main } from './index';

const testAndResult = [{
    number: 10001,
    result: 10001
}, {
    number: 100010,
    result: 10001
},{
    number: Math.pow(2, 32) + 1,
    result: 0
}, {
    number: 0,
    result: 0
}];
describe("07-resver-integer", () => {

    testAndResult.forEach(item => {
        test(`test ${item.number}`, () => {
            expect(main(item.number)).toBe(item.result)
        });
    });
  
  });