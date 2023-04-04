//4
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  const array = [0,1,2,3,4,5,6,7,8,9];
const output = shuffleArray(array);
console.log(output);
