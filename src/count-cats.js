const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    // spread syntax operator позволяет для элементов массива вызывать их через троеточие (...matrix). С помощью него выражение сократилось.
    // метод concat() используется для объединения двух, или более массивов в один
    // в цикле происходит сравнение, если элемент массива равен "^^", то считается кол-во этих элементов
    let num = 0;
    let arr = matrix.concat(...matrix);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "^^")
            num += 1;
    }
    return num;
};