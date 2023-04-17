/**
 * 玩游戏的时间管理
 *  
 */
class Game{
  name:string;
  play_time:number;
  
  /**
  * 构造函数：
  *   随着类的实例化而自动执行的函数
  */
  constructor(name,play_time){
    // this 指向生成的Object本身
    this.name = name;
    this.play_time = play_time;
  }
  
  getPlayTime(){
    return `时间：${this.play_time}分钟`;
  }
  
  // 额外申请游戏时间
  incrementPlayTime(){
    this.play_time += 10;
  }
}

let xiaoming = new Game("小明",20);
console.log(`姓名：${xiaoming.name}`);

// 增加10分钟
xiaoming.incrementPlayTime(); 
console.log(xiaoming.getPlayTime());

let xiaohua = new Game("小花",60);
console.log(`姓名：${xiaohua.name}`);

xiaohua.incrementPlayTime();
xiaohua.incrementPlayTime();
xiaohua.incrementPlayTime();
console.log(xiaohua.getPlayTime());
