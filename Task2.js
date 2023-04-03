let rows = 5;
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= rows; j++) {
        if (i === 1 || i === rows || j === 1 || j === rows) {
          row += "* ";
        } else {
          row += "  ";
        }
      }
      console.log(row);
    }
   