var matrix1 = [
    [2,4],
    [6,8],
    [10,12]
]

var matrix2 = [
    [1,3],
    [5,7],
    [9,11]
]

var resultMatrix = [];

// Dimension of Matrix 1
var row1 = matrix1.length;
var col1 = matrix1[0].length;

// Dimension of Matrix 2
var row2 = matrix2.length;
var col2 = matrix2[0].length;



if(row1 == row2 && col1 == col2){
    
    for(var i = 0 ; i < matrix1.length ; i++){
        
        var emptyArray = [];

        for(var j = 0 ; j<matrix1[i].length ; j++){
            // console.log(`[ Matrix1 (${i},${j})  ${matrix1[i][j]} ]\t[ Matrix2 (${i},${j})  ${matrix2[i][j]} ]`);

            var number1 = matrix1[i][j];
            var number2 = matrix2[i][j];

            var result = number1 + number2;
            emptyArray.push(result);

        }

        resultMatrix.push(emptyArray);
    }

    // Print the Matrix
    
    for(var i = 0 ; i < resultMatrix.length ; i++){
        var s = "";
        for(var j = 0 ; j<resultMatrix[i].length ; j++){
            s = s + resultMatrix[i][j] + "\t"
        }
        console.log(s);

    }

}
else{
    console.log("Can not perform Addition. Invalid Dimension!");
}