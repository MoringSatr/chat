cc.Class({
    extends: cc.Component,

    properties: {
        chatmsg: cc.Label,
        bg: cc.Sprite,
        maxNum: 10,
    },
    init: function (data) {
        this.chatmsg.string = data;
        let subString = this.subString1(data);
        cc.log(`this.chatmsg.string.length : ${subString} , this.maxNum : ${this.maxNum}`)
        if (subString <= this.maxNum) {
            this.bg.node.width = subString * 20;
        } else {
            this.bg.node.width = this.maxNum * 20;
            let number = Math.ceil(subString / this.maxNum);
            cc.log(`number : ${number}`);
            this.bg.node.height = number * 40;
        }
    },
    subString1: function (str) {
        return str.replace(/[^\x00-\xff]/g, "aa").length;
    }
});
