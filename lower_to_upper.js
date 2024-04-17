
let str = prompt();

let result =[];

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < str.length; i++) {
    if(UPPER.indexOf(str[i])!==-1) {
        result.push(str[i].toLowerCase());
    } else if (lower.indexOf(str[i]) !== -1){
        result.push(str[i].toUpperCase());
    } else result.push(str[i]);
}
document.write(result.join(''));