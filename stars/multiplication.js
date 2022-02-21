let arr1 = [
    [1, 2, 3],
    [4, 5, 6]
];
let arr2 = [
    [4, 5],
    [6, 7],
    [8, 9]
]
for (let i = 0; i < arr1.length; i++){
    var firstElements = [];
    for (let j = 0; j < arr1[i].length; j++){
        if (i % 2 == 0) {
            var multiplication = arr1[i][j] * arr2.map(function (x) {
        return x[0];
            })
            firstElements.push(multiplication)
        }
        else {
            console.log(arr1[i][j]);
        }
    }
    console.log(firstElements);
}