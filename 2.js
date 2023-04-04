//2
function Dashes(num){
    let str = num.toString();
    let result = str[0];
    for (let i = 1; i < str.length; i++){
        if(str[i - 1] % 2 == 0 && str[i] % 2 == 0){
            result = result + '-' + str[i];
        }
        else{
            result = result + str[i];
        }
    }
    return result;
}
const input = 02544168;
const output = Dashes(input);
console.log(output); 
