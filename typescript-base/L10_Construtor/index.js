/**
 * 玩游戏的时间管理
 *
 */
var Game = /** @class */ (function () {
    /**
    * 构造函数：
    *   随着类的实例化而自动执行的函数
    */
    function Game(name, play_time) {
        // this 指向生成的Object本身
        this.name = name;
        this.play_time = play_time;
    }
    Game.prototype.getPlayTime = function () {
        return "\u65F6\u95F4\uFF1A".concat(this.play_time, "\u5206\u949F");
    };
    // 额外申请游戏时间
    Game.prototype.incremntPlayTime = function () {
        this.play_time += 10;
    };
    return Game;
}());
var xiaoming = new Game("小明", 20);
console.log("\u59D3\u540D\uFF1A".concat(xiaoming.name));
// 增加10分钟
xiaoming.incremntPlayTime();
console.log(xiaoming.getPlayTime());
var xiaohua = new Game("小花", 60);
console.log("\u59D3\u540D\uFF1A".concat(xiaohua.name));
xiaohua.incremntPlayTime();
xiaohua.incremntPlayTime();
xiaohua.incremntPlayTime();
console.log(xiaohua.getPlayTime());
