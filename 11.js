
function insertString(String, inputString, inputPosition = 1) {
    return String.slice(0, inputPosition) + inputString + String.slice(inputPosition) ;
  }
  
  const String = "This is a sample string";
const inputString = "Insert me";
const inputPosition = 3;
const outputString = insertString(String, inputString, inputPosition);
console.log(outputString);
