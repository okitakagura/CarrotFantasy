var GPUILayer = cc.Layer.extend({
    topBar : null,
    bottomBar : null,
    goldText : null,
    groupText : null,
    onEnter : function(){
        this._super();
        // 加载[顶部菜单栏]
        this.loadTopBar();
        // 加载[金币]
        this.loadGoldText();
        // 加载[组信息]
        this.loadGroupInfo();
        // 加载[顶部按钮]
        this.loadTopButtons();
        // 加载[底部按钮]
       // this.loadBottomButtons();
        // 注册[事件]
        this.registerEvent();
    },
    registerEvent : function(){
        // 组更新
        var onUpdateGroupListener = cc.EventListener.create({
            event       : cc.EventListener.CUSTOM,
            target      : this,
            eventName   : jf.EventName.GP_UPDATE_GROUP,
            callback    : this.onUpdateGroup
        });
        cc.eventManager.addListener(onUpdateGroupListener, this);

    },

    onUpdateGroup : function(event){
        var group = event.getUserData().group;
        var self = event.getCurrentTarget();
        self.groupText.setString(group + "");
        //self.goldText.setString("45");
    },
    // 加载[顶部菜单栏]
    loadTopBar : function(){
        //文本背景图片
        var node = new ccui.ImageView("res/GamePlay/UI/top_bg.png");
        this.addChild(node);
        this.topBar = node;
        node.setAnchorPoint(0.5, 1);
        node.setPosition(cc.winSize.width / 2, cc.winSize.height);
        //波数
        var centerNode = new ccui.ImageView("res/GamePlay/UI/waves_bg.png");
        node.addChild(centerNode);
        centerNode.x = node.width / 2;
        centerNode.y = node.height / 2;
        //波怪物
        var groupIndo = new ccui.ImageView("res/GamePlay/UI/CN/group_info.png");
        centerNode.addChild(groupIndo);
        groupIndo.x = centerNode.width / 2;
        groupIndo.y = centerNode.height / 2;
    },
    // 加载[金币文本]
    loadGoldText : function(){
        var goldStr = GameManager.getGold() + "";
        var node = new ccui.Text(goldStr, "Arial", 32);
        node.setName("goldstr");
        this.topBar.addChild(node);
        this.goldText = node;
        node.setAnchorPoint(0, 0.5);
        node.setPosition(100, 43);
    },
    // 加载[组信息]
    loadGroupInfo : function(){
        // 索引从0开始，表示应该+1
        var node = new ccui.Text("1", "Arial", 32);
        this.topBar.addChild(node);
        this.groupText = node;
        node.x = this.topBar.width / 2 - 65;
        node.y = this.topBar.height / 2 + 7;

        var maxGroup = GameManager.getMaxGroup() + 1;
        var maxNode = new ccui.Text(maxGroup + "", "Arial", 32);
        this.topBar.addChild(maxNode);
        maxNode.x = node.x + 60;
        maxNode.y = node.y;
    },
    // 加载[顶部按钮]
    loadTopButtons : function(){
        this.loadSpeedButton();
        this.loadPauseButton();
        this.loadMenuButton();
    },
    // 加载[变速按钮]
    loadSpeedButton : function(){
        var node = new ccui.Button();
        this.topBar.addChild(node);
        node.loadTextureNormal("res/GamePlay/UI/speed_0.png");
        node.loadTexturePressed("res/GamePlay/UI/speed_1.png");
        node.x = 700;
        node.y = this.topBar.height / 2;
    },
    // 加载[暂停按钮]
    loadPauseButton : function () {
        /*var node = new ccui.Button();
        this.topBar.addChild(node);
        node.loadTextureNormal("res/GamePlay/UI/pause_0.png");
        node.loadTexturePressed("res/GamePlay/UI/pause_0.png");
        node.setPressedActionEnabled(true);
        node.setZoomScale(0.2);
        node.x = 800;
        node.y = this.topBar.height / 2;*/
        var bntcontinue=new ccui.ImageView("res/GamePlay/UI/pause_1.png");
        this.topBar.addChild(bntcontinue);
        bntcontinue.setTouchEnabled(true);

        bntcontinue.x=800;
        bntcontinue.y=this.topBar.height / 2;
        bntcontinue.addTouchEventListener(function(sender,type) {
            switch(type){
                case ccui.Widget.TOUCH_BEGAN:
                    break;
                case ccui.Widget.TOUCH_ENDED:
                    cc.audioEngine.resumeMusic ();
                    cc.director.resume();
                    bntcontinue.setLocalZOrder(5);
                    bntpause.setLocalZOrder(10);
                    break;
                default:
                    break;
            }
        }.bind(this));
        var bntpause=new ccui.ImageView("res/GamePlay/UI/pause_0.png");
        this.topBar.addChild(bntpause);
        bntpause.setTouchEnabled(true);

        bntpause.x=800;
        bntpause.y=this.topBar.height / 2;
        bntpause.addTouchEventListener(function(sender,type) {
            switch (type)
            {
                case ccui.Widget.TOUCH_BEGAN:
                    break;
                case ccui.Widget.TOUCH_ENDED:
                    cc.audioEngine.pauseMusic();
                    cc.director.pause();
                    bntcontinue.setLocalZOrder(10);
                    bntpause.setLocalZOrder(5);
                    break;
                default:
                    break;
            }

        }.bind(this));

        bntcontinue.setLocalZOrder(5);
        bntpause.setLocalZOrder(10);


    },

    // 加载[菜单按钮]
    loadMenuButton : function () {
        var node = new ccui.Button();
        this.topBar.addChild(node);
        node.loadTextureNormal("res/GamePlay/UI/menu.png");
        node.loadTexturePressed("res/GamePlay/UI/menu.png");
        node.setPressedActionEnabled(true);
        node.setZoomScale(0.2);
        node.x = 870;
        node.y = this.topBar.height / 2;
        // ... ...
        node.addTouchEventListener(function(sender, type) {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:       // 触摸事件结束时响应
                    var event = new cc.EventCustom(jf.EventName.GP_CREATE_MENU_LAYER);
                    cc.eventManager.dispatchEvent(event);
                    break;
            }
        }.bind(this));
    },



    getGoldText:function()
    {
        return this.goldText;
    }
});

