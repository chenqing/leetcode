import { main, another } from './index';
const clonedeep = require('clone-deep');

const testAndResult = [{
    arr: [1,1,2,2,3,3],
    result: [1,2,3]
},
{
    arr: [0,0,1,1,1,2,2,3,3,4],
    result: [0,1,2,3,4]
}
];

const anotherTestAndResult = clonedeep(testAndResult)

describe("26-remove-duplicates-from-sorted-array solution 1", () => {

    testAndResult.forEach(item => {
        test(`test ${item.arr}`, () => {
            const result = main(item.arr);
            expect(result).toBe(item.result.length)
        });
    });
  
  });

describe("26-remove-duplicates-from-sorted-array solution 2", () => {
    anotherTestAndResult.forEach(item => {
        test(`test ${item.arr}`, () => {
            const result = another(item.arr);
            expect(result).toBe(item.result.length)
        });
    });
  
  });