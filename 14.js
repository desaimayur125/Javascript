
function sortArrayOfObjects(arrayOfObjects) {
 
    arrayOfObjects.sort((a, b) => {
      return a.age - b.age;
    });
  
    arrayOfObjects.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  
    return arrayOfObjects;
  }
  const arrayOfObjects = [
    { id: 1, name: "John", age: 32 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Alice", age: 30 },
    { id: 5, name: "Peter", age: 24 },
    { id: 6, name: "Sara", age: 27 },
    { id: 7, name: "Tom", age: 29 },
    { id: 8, name: "Karen", age: 31 },
    { id: 9, name: "David", age: 26 },
    { id: 10, name: "Mary", age: 23 }
  ];
  
  const sortedArrayOfObjects = sortArrayOfObjects(arrayOfObjects);
  console.log(sortedArrayOfObjects);
  