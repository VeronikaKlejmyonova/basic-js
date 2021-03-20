const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; // начальная активность N0
const HALF_LIFE_PERIOD = 5730; // период полураспада t 1/2 = (0.693 / k)

module.exports = function dateSample(sampleActivity) {
    const k = (0.693 / HALF_LIFE_PERIOD); // константа скорости реакции k = (0.693 / t 1/2)
    const N = Number.parseFloat(sampleActivity); // конечная ативность N
    let t;
    //Number.parseFloat(sampleActivity) - переводит строку в число с плавоющей точкой
    //isFinite(N) - если переменная является числом (не NaN/Infinity/-Infinity) вернет значение true
    // isNaN(t) - если переменная является не числом или NaN вернет значение true
    // typeof sampleActivity === "string" - проверяет если переменная явл строкой
    // sampleActivity instanceof String - оператор instanceof позволяет проверить, к какому классу принадлежит объект
    // Math.ceil - округление в большую сторону: 3.1 становится 4
    // Math.log - используется для возврата натурального логарифма (основание e) числа
    if (isFinite(N) && typeof sampleActivity === "string" || sampleActivity instanceof String) {
        t = Math.ceil((Math.log(MODERN_ACTIVITY / N) / k));
        if (isNaN(t) || t < 0 || t == Infinity)
            return false;
        return t;
    }
    return false;
}