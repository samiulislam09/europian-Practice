// problem 1
var number = 6;
var arr = [];
for (let i = 1; i <= number; i++){
    let str = "*".repeat(i)
    arr.push(str)
}

for (let item of arr) {
    console.log(item);
}


// problem 2
var number = 12;
var arr = [];
for (let i = number; i >= 1; i--) {
    let str = "*".repeat(i)
    arr.push(str)
}

for (let item of arr) {
    console.log(item);
}


// problem 3
var number = 6;
var arr = [];
for (let i = 1; i <= number; i++) {
    let items = []
    for (let j = 0; j < i; j++) {
        let str = String.fromCharCode(j + 65);
        items.push(str)
    }
    arr.push(items)
}
for (let item of arr) {
    console.log(item.join(''));
}


// problem 4
var number = 6;
let arr = [];
for (let i = 1; i < number; i++) {
    var items = []
    for (let j = 1; j < number; j++) {
        if (i + j >= number) {
            items.push("*")
        } else {
            items.push(' ')
        }
    }
    arr.push(items)
}
for (let item of arr) {
    console.log(item.join(''));
}
