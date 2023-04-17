/**
 * 支付
 *  微信
 *  支付宝
 *  银行卡
 */
// 操作方案：http请求 额外的业务操作
var do_Pay = function (pay) {
    pay.post();
};
// 微信支付
var WeChatPay = /** @class */ (function () {
    function WeChatPay() {
    }
    WeChatPay.prototype.post = function () {
        console.log("微信支付");
    };
    return WeChatPay;
}());
// 支付宝支付
var AliPay = /** @class */ (function () {
    function AliPay() {
    }
    AliPay.prototype.post = function () {
        console.log("支付宝支付");
    };
    return AliPay;
}());
var wechat_pay = new WeChatPay();
do_Pay(wechat_pay);
var ali_pay = new AliPay();
do_Pay(ali_pay);
