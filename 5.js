//5
function arrayUnion(arr1, arr2) {
    const unionArr = [...new Set([...arr1, ...arr2])];
    return unionArr;
  }
  
  function arrayDifference(arr1, arr2) {
    const adiffB = arr1.filter(x => !arr2.includes(x));
    const bdiffA = arr2.filter(x => !arr1.includes(x));
    return { adiffB, bdiffA };
  }
  
  function arrayIntersection(arr1, arr2) {
    const intersectionArr = arr1.filter(x => arr2.includes(x));
    return intersectionArr;
  }
  
const array_a = [0,1,2,3];
const array_b = [3,4,5];
const union_array = arrayUnion(array_a, array_b);
const diff_array = arrayDifference(array_a, array_b);
const intersection_array = arrayIntersection(array_a, array_b);
console.log("union: ", union_array); 
console.log("A-B: ", diff_array.adiffB); 
console.log("B-A: ", diff_array.bdiffA); 
console.log("intersection: ", intersection_array);
