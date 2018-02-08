var Item = cc.Class({
    properties: {
        msg: '',
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        inputMsg: {
            default: null,
            type: cc.EditBox,
        },
        sendBtn: {
            default: null,
            type: cc.Button,
        },
        mgsPre: {
            default: null,
            type: cc.Prefab,
        },
        items: {
            default: [],
            type: Item,
        },
        scorll: {
            default: null,
            type: cc.ScrollView
        },
        itemPos: -90,
    },
    sendChatMsg() {
        let itemData = new Item();
        itemData.msg = this.inputMsg.string;
        let item = cc.instantiate(this.mgsPre);
        let component = item.getComponent('msgTem');
        component.init(itemData.msg);
        item.x = -450;
        item.y = this.itemPos;
        cc.log(item);
        this.scorll.content.addChild(item);

        let height = component.bg.node.height + 10;
        cc.log(`height : ${height}`)
        cc.log(`this.itemPos : ${Math.abs(this.itemPos)} , this.scorll.content.height : ${this.scorll.content.height}`)
        if(Math.abs(this.itemPos) + 80 >= this.scorll.content.height) {
            this.scorll.content.height += height;
        }
        this.itemPos -= height;
        this.scorll.scrollToBottom(0.1);
    },
});
