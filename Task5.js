
let rows = 5;


let pattern = '';


for (let i = 1; i <= rows; i++) {

    for (let j = 1; j < i; j++) {
        pattern += ' ';
    }

    for (let k = i; k <= rows; k++) {
        pattern += k + ' ';
    }

    pattern += '\n';
}


for (let i = rows - 1; i >= 1; i--) {

    for (let j = 1; j < i; j++) {
        pattern += ' ';
    }

    for (let k = i; k <= rows; k++) {
        pattern += k + ' ';
    }

    pattern += '\n';
}


console.log(pattern);
