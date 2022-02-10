var num1 = 1200;
var num2 = 750;
var num3 = 75000;

var lower = 0;
var middle = 0;
var gretter = 0;

if ((num1 < num2) && (num1 < num3)) {
    lower = num1;
    if (num2 < num3) {
        middle = num2;
        gretter = num2;
    }
    if (num3 < num2) {
        middle = num3;
        gretter = num2;
    }
    
}
if ((num2 < num1) && (num2 < num3)) {
    lower = num2;
    if (num1 < num3) {
        middle = num1;
        gretter = num3;
    }
    if (num3 < num1) {
        middle = num3;
        gretter = num1;
    }
    
}
if ((num3 < num1) && (num3 < num2)) {
    lower = num3;
    if (num2 < num1) {
        middle = num2;
        gretter = num1;
    }
    if (num1 < num2) {
        middle = num1;
        gretter = num2;
    }
    
}
console.log(lower, middle, gretter);
