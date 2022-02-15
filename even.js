// var number = 20;

// for (let i = 1; i <= number; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };

// var secondNumber = 15;
// for (let i = 1; i <= number; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     };
// };


var length = 3;
var result = '';
for (let i = 1; i <= length; i++){
    result += "# ";
    if (i >= length) {
        break
    }
    result += "- ";
    i++;
}
console.log(result);