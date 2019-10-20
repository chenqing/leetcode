interface NumberTools {
    x: number,
    isNumber: (x: any) => boolean,
    isInteger: (x: any) => boolean,

}

interface isInteger {
    (x: any): boolean
}

interface isNumber {
    (x: any): boolean
}

interface numberLength {
    (x: number): number
}

interface numberReverse {
    (x: number): number
}

export const INT_MAX = 2147483647; // Math.pow(2, 31) - 1

export const INT_MIN = -2147483648; // Math.pow(-2, 31)

/**
 * @desc determine x if it is a number
 * @param x 
 * @returns boolean
 */
export const isNumber: isNumber = x => typeof x === 'number' && !isNaN(x);

/**
 * @desc determine x if it is a integer
 * @param x 
 * @returns boolean
 */
export const isInteger: isInteger = x => isNumber(x) && x % 1 === 0;

/**
 * @desc get integer number length
 * @param x 
 * @returns number
 */
export const length: numberLength = x => {
    if (isInteger(x)) {
        let num: number = 1;
        while (x / Math.pow(10, num) > 1) num++;
        return num;
    }

    return -1;
}

export const reverse: numberReverse = x => {
    let result: number = 0;
    if (isInteger(x)) {
        while (x !== 0) {
            // pop number
            let last: number = x % 10;
            x = Math.floor(x / 10);

            if (result > INT_MAX / 10 || (result === INT_MAX && last > 7)) return 0;
            if (result < INT_MIN / 10 || (result === INT_MIN && last < -8)) return 0;

            result = result * 10 + last;
        }
    }

    return result;
}