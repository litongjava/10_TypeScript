/**
 * 一周7天
 * 使用：三种状态
 */

enum DaysOfTheWeek {
  SUM, MON, TUE, WED, THU, FRI, SAT
}

console.log(DaysOfTheWeek.MON);

let day: DaysOfTheWeek;
day = DaysOfTheWeek.SAT

// 可读性
if (day === DaysOfTheWeek.SAT) {
  console.log('周六')
}
