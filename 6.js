//6
function num_string_range(lower, upper, step) {
    const result = [];
    const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    for (let i = array.indexOf(lower); i <= array.indexOf(upper); i = i + step) {
      result.push(array[i]);
    }
  
    return result;
  }
  
  console.log(num_string_range('a', 'z',2));

  