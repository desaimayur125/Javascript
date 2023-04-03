
let size = 5; 

for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === j || i === size - j - 1 ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

