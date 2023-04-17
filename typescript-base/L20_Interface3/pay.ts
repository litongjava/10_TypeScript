/**
 * 支付
 *  微信
 *  支付宝
 *  银行卡
 */

interface IPay {
  post(): void;
}
// 操作方案：http请求 额外的业务操作
const do_Pay = (pay: IPay) => {
  pay.post();
}

// 微信支付
class WeChatPay implements IPay {
  post() {
    console.log("微信支付");
  }
}

// 支付宝支付
class AliPay implements IPay {
  post() {
    console.log("支付宝支付");
  }
}

// 银行卡支付...

let wechat_pay: IPay = new WeChatPay();
do_Pay(wechat_pay);

let ali_pay: IPay = new AliPay();
do_Pay(ali_pay);