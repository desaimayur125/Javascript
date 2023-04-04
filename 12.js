
function stringChop(inputString, chunkLength) {
    const chunks = [];
    for (let i = 0; i < inputString.length; i =  i + chunkLength) {
      chunks.push(inputString.slice(i, i + chunkLength));
    }
    return chunks;
  }
const inputString = "RapidOpsSolution";
const chunkLength = 2;
const outputArray = stringChop(inputString, chunkLength);
console.log(outputArray);
