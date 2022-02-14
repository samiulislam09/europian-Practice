var num1 = 1200;
var num2 = 750;
var num3 = "lll";

var gretter = 0;
var middle = 0;
var lower = 0;
if ((!isNaN(num1)) && (!isNaN(num2)) && (!isNaN(num3))) {
    if ((num1 > num2) && (num1 > num3)) {
        gretter = num1;
        if (num2 > num3) {
            middle = num2;
            lower = num3;
        }
        if (num3 > num2) {
            middle = num3;
            lower = num2
        }

    }
    if ((num2 > num1) && (num2 > num3)) {
        gretter = num2;
        if (num1 > num3) {
            middle = num1;
            lower = num3;
        }
        if (num3 > num2) {
            middle = num3;
            lower = num2
        }
    }
    if ((num3 > num1) && (num3 > num2)) {
        gretter = num3;
        if (num2 > num1) {
            middle = num2;
            lower = num1;
        }
        if (num1 > num2) {
            middle = num1;
            lower = num2
        }
    }
    console.log(gretter, middle, lower);

} else {
    console.log('please provide a anumber');
}

