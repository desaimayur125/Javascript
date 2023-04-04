
function deleteAndInsert(array, action, position, name, age) {
    if (action === 'delete') {
      if (position >= array.length) {
        console.log('Error');
        return array;
      }
      array.splice(position - 1, 1);
      return array;
    } else if (action === 'insert') {
      if (position > array.length + 1) {
        console.log('Error ');
        return array;
      }
      array.splice(position - 1, 0, { name, age });
      return array;
    } else {
      console.log('Invalid ');
      return array;
    }
  }
  const array = [ {name: "Jack", age: 23}, {name: "Sam", age: 12}, {name: "Max", age: 20} ];

console.log(deleteAndInsert(array, 'delete', 2)); 
console.log(deleteAndInsert(array, 'insert', 3, 'Daniel', 56)); 