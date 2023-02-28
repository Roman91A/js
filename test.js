// Имеется 2 функции BetweenDates и BetweenDates1, на вход принимаю 3 аргумента (Начала теста, Конец теста, текущее время). 
// Если currentDate входит в (start, end) то возвращает true, иначе false 



var startTime = '28.02.2023 14:48'
var endTime = '10.03.2023 00:00'



// Пример 1 (startTime, endTime приводим к UTC, после у currentDate вызываем isBetween)
var currentDate = moment.utc()

function BetweenDates() {
    var start = moment.utc(startTime + " +0300", "DD.MM.YYYY HH:mm Z");
    var end = moment.utc(endTime + " +0300", "DD.MM.YYYY HH:mm Z");
    return currentDate.isBetween(start, end)
}
console.log(BetweenDates())


// Пример 2 (currentDate смещаем на 3 часа, в результате currentDate = время МСК, после у currentDate вызываем isBetween)
var currentDate = moment.utc().add(3, 'hours');
function BetweenDates1() {
    var start = moment.utc(startTime, "DD.MM.YYYY HH:mm");
    var end = moment.utc(endTime, "DD.MM.YYYY HH:mm");
    return currentDate.isBetween(start, end)
}
console.log(BetweenDates1())
