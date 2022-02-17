var number = 20;
var multiplication = 1;
for (let i = 1; i <= number; i++){
    if (i % 2 == 0) {
        multiplication *= i;
    };
};
console.log(`first 20 even numer multiplication result ${multiplication}`);

var secondNumber = 15;
var sum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
        sum += i;
    };
};
console.log(`first 15 odd numer summation result ${sum}`);

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
