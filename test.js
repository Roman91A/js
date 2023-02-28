// Пример 1 
var startTime = '28.02.2023 14:48'
var endTime = '10.03.2023 00:00'
var currentDate = moment.utc()

function BetweenDates() {
    var start = moment.utc(startTime + " +0300", "DD.MM.YYYY HH:mm Z");
    var end = moment.utc(endTime + " +0300", "DD.MM.YYYY HH:mm Z");
    return currentDate.isBetween(start, end)
}
console.log(BetweenDates())


// Пример 2
var startTime = '28.02.2023 14:50'
var endTime = '10.03.2023 00:00'
var currentDate = moment.utc().add(3, 'hours');

function BetweenDates1() {
    var start = moment.utc(startTime, "DD.MM.YYYY HH:mm");
    var end = moment.utc(endTime, "DD.MM.YYYY HH:mm");
    return currentDate.isBetween(start, end)
}
console.log(BetweenDates1())
