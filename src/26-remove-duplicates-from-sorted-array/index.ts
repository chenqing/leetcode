/**
 * solution 1 
 */

export const main = (nums:Array<number>):number  =>  {
  if (nums.length < 2) return nums.length;

  let i = 0;

  for(let j = 1; j < nums.length; j++) {
    if(nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
} 

/**
 * other solution
 */

export const another = (nums:Array<number>) : number => {
  let pre = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const next = nums[i];

    if(pre === next) {
      nums.splice(i, 1);
      i--;
    } else {
      pre = next;
    }
  }

  return nums.length;
} 