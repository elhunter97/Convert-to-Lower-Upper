
let str = prompt();
// Declare and initialize the input string
// const str = 'c';
// Define constants for uppercase and lowercase letters
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// Initialize an array to store the result
const result = [];
// Iterate through each character in the input string
for (let x = 0; x < str.length; x++) {
    // Check if the current character is an uppercase letter
    if (UPPER.indexOf(str[x]) !== -1) {
        // Convert the uppercase letter to lowercase and add it to the result array
        result.push(str[x].toLowerCase());
    }
    // Check if the current character is a lowercase letter
    else if (LOWER.indexOf(str[x]) !== -1) {
        // Convert the lowercase letter to uppercase and add it to the result array
        result.push(str[x].toUpperCase());
    }
    // If the current character is neither uppercase nor lowercase, add it to the result array as is
    else {
        result.push(str[x]);
    }
}
// Output the joined result array as a string
console.log(result.join(''));
// let result =[];
//
// const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lower = 'abcdefghijklmnopqrstuvwxyz';
// for (let i = 0; i < str.length; i++) {
//     if(UPPER.indexOf(str[i])!==-1) {
//         result.push(str[i].toLowerCase());
//     } else if (lower.indexOf(str[i]) !== -1){
//         result.push(str[i].toUpperCase());
//     } else result.push(str[i]);
// }
// document.write(result.join(''));