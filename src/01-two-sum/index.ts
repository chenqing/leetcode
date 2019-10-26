
export const main = (arrays: Array<number>, target: number): Array<number> => {
  const map = new Map();
  const length = arrays.length;
  
  for (let i = 0; i < length; i++) {
    const value = arrays[i];
    const find = target - value;

    if (map.has(find)) {
      return [map.get(find), i];
    }

    map.set(value, i);
  }
}