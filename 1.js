//1
function getFirstAndLast(array, n) {
    if (n == null) {
      return {
        first: array[0],
        last: array[array.length - 1]
      };
    }
    return {
      first: array.slice(0, n),
      last: array.slice(array.length - n)
    };
  }
  const static_array = [0,1,2,3,4,5,6,7,8,9];
const input = 3;
const output = getFirstAndLast(static_array, input);
console.log(`First ${input} elements:`, output.first);
console.log(`Last ${input} elements:`, output.last);
