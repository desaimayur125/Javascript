//3
function mostfrequent(arr){
    let count = {};
    let maxcount =0;
    let maxitem =null;

    for(let item of arr){
        count[item] = (count[item] || 0) +1;
        if (count[item] > maxcount){
            maxcount = count[item];
            maxitem =item;
        } 
    }
    return maxitem;
}
const array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
const output = mostfrequent(array);
console.log(output);
