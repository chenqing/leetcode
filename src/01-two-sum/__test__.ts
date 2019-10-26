import { main } from './index';

const testAndResult = [{
    arrays: [1,2,7,11],
    target: 9,
    result: [1,2]
},
{
  arrays: [1,2,7,11],
  target: 13,
  result: [1,3]
}
];
describe("01-two-sum", () => {

    testAndResult.forEach(item => {
        test(`test ${item.arrays} target ${item.target}`, () => {
            expect(main(item.arrays, item.target)).toEqual(item.result)
        });
    });
  
  });