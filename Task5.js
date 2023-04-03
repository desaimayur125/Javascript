// Define the number of rows
let rows = 5;

// Initialize the pattern string
let pattern = '';

// Print the upper half of the pattern
for (let i = 1; i <= rows; i++) {
    // Add the spaces for right alignment
    for (let j = 1; j < i; j++) {
        pattern += ' ';
    }
    // Add the numbers for the row
    for (let k = i; k <= rows; k++) {
        pattern += k + ' ';
    }
    // Add a newline character at the end of the row
    pattern += '\n';
}

// Print the lower half of the pattern
for (let i = rows - 1; i >= 1; i--) {
    // Add the spaces for right alignment
    for (let j = 1; j < i; j++) {
        pattern += ' ';
    }
    // Add the numbers for the row
    for (let k = i; k <= rows; k++) {
        pattern += k + ' ';
    }
    // Add a newline character at the end of the row
    pattern += '\n';
}

// Output the final pattern string to the console
console.log(pattern);
