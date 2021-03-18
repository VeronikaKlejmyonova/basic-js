const CustomError = require("../extensions/custom-error");
//const matrix = ([
//    ['##', 'dd', '00'],
//    ['^', '^', 'ss'],
//    ['AA', 'dd', 'Oo'],
//]);

module.exports = function countCats(matrix /* backyard*/ ) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    //  let number = matrix.filter(x => x == '^^');
    //   return number.length;
    let num = 0;
    let arr = matrix.concat(...matrix);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "^^")
            num += 1;
    }
    return num;
    //    while (matrix.indexOf('^^') != -1) {
    //      num += 1;
    //  }
};