function addCommasToNumber(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const inputNumber = 1023165454197;
const outputString = addCommasToNumber(inputNumber);
console.log(outputString);
