/*
* Problem: Given an N by N matrix, rotate it by 90 degrees clockwise.
{@link https://hackernoon.com/daily-coding-problem-rotating-matrices}
*/


const rotate = (_arr) => {
    const len = _arr.length;

    for (let row = 0; row < len; row++) {
        for (let colum = row; colum < len; colum++) {
            [ _arr[row][colum], _arr[colum][row] ] = [ _arr[colum][row], _arr[row][colum] ];
            // [_arr[colum][row], _arr[row][len - colum - 1]] = [_arr[row][len - colum - 1], _arr[[colum][row]]
        }
    }

    for (let row = 0; row < len; row++) {
        for (let colum = 0; colum < Math.floor(len / 2); colum++) {
            [ _arr[row][colum], _arr[row][len - colum - 1] ] = [ _arr[row][len - colum - 1], _arr[row][colum] ];
        }
    }

    return _arr;
}

const matrices = [
    [1,3],
    [4,2],
];

console.log(rotate(matrices));


/* 3x3
*
*1 2 3 -> [0,0] [0,1] [0,2] 2
*4 5 6 -> [1,0] [1,1] [1,2] 1
*7 8 9 -> [2,0] [2,1] [2,2] 0

* 2 x 2
* 1 2 1
* 3 4 0
*/