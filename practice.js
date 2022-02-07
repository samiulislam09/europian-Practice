// practice 1
// a2 + 2ab + b2
var a = 10;
var b = 20;
var result1 = (a ** 2) + (2 * a * b) + (b ** 2)
console.log(result1)


// a3 + 3a2b + 3ab2 + b3

var result2 = (a ** 3) + (3 * (a ** 2) * b) + (b ** 3)
console.log(result2)


// practice 2

var shahin = 525;
var harun = 600;
var shahinGoesFirst = true;
if (shahinGoesFirst) {
    var temp = shahin;
    shahin = harun;
    harun = temp;
}
console.log("After exchanging shahin have", shahin, "taka");
console.log("After exchanging harun have", harun, "taka");