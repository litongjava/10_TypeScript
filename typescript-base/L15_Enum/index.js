/**
 * 一周7天
 * 使用：三种状态
 */
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUM"] = 0] = "SUM";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 3] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 4] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 5] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 6] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
console.log(DaysOfTheWeek.MON);
var day;
day = DaysOfTheWeek.SAT;
// 可读性
if (day === DaysOfTheWeek.SAT) {
    console.log('周六');
}
