var GamePlayScene = cc.Scene.extend({
    backgroundLayer : null, // 背景层
    mainLayer       : null, // 玩法层
    uiLayer         : null, // UI层
    menuLayer       : null, // 菜单层
    ctor : function(){
        this._super();
        cc.audioEngine.playMusic("res/Sound/GamePlay/BGMusic01.mp3", true);
    },
    onEnter : function () {
        this._super();
        // 加载[资源]
        this.loadResource();
        // 加载[背景层]
        this.loadBackgroundLayer();
        // 加载[主层]
        this.loadMainLayer();
        // 加载[UI层]
        this.loadUILayer();
        // 注册[事件]
        this.registerEvent();
    },
    // 注册[事件]
    registerEvent : function(){
        // [事件监听]创建菜单层
        var onCreateMenuLayerListener = cc.EventListener.create({
            event       : cc.EventListener.CUSTOM,
            target      : this,
            eventName   : jf.EventName.GP_CREATE_MENU_LAYER ,
            callback    : this.onCreateMenuLayer
        });
        cc.eventManager.addListener(onCreateMenuLayerListener, this);

        // [事件监听]移除菜单层
        var onRemoveMenuLayerListener = cc.EventListener.create({
            event       : cc.EventListener.CUSTOM,
            target      : this,
            eventName   : jf.EventName.GP_REMOVE_MENU_LAYER ,
            callback    : this.onRemoveMenuLayer
        });
        cc.eventManager.addListener(onRemoveMenuLayerListener, this);
    },
    //加载资源
    loadResource : function(){
         cc.spriteFrameCache.addSpriteFrames("res/GamePlay/Carrot/Carrot1/hlb1.plist", "res/GamePlay/Carrot/Carrot1/hlb1.png");
         cc.spriteFrameCache.addSpriteFrames("res/GamePlay/Tower/Bottle.plist", "res/GamePlay/Tower/Bottle.png");
         cc.spriteFrameCache.addSpriteFrames("res/GamePlay/Tower/TShit-hd.plist", "res/GamePlay/Tower/TShit-hd.png");
         cc.spriteFrameCache.addSpriteFrames("res/GamePlay/Tower/TFan-hd.plist", "res/GamePlay/Tower/Tfan-hd.png");
         var themeId = GameManager.getThemeID();
         //cc.spriteFrameCache.addSpriteFrames("res/GamePlay/Object/Theme" + themeId + "/Monster/theme_" + themeId + ".plist",
         //   "res/GamePlay/Object/Theme" + themeId + "/Monster/theme_" + themeId + ".png");
    },
    // 加载背景层
    loadBackgroundLayer : function(){
        var node = new GPBackgroundLayer();
        this.addChild(node);
        this.backgroundLayer = node;
    },
    //加载主界面层
    loadMainLayer : function(){
        var node = new GPMainLayer();
        this.addChild(node);
        this.mainLayer = node;
    },
    //加载UI层
    loadUILayer : function(){
        var node = new GPUILayer();
        this.addChild(node);
        this.uiLayer = node;
    },
    //加载菜单层
    loadMenuLayer : function(){
        var node = new GPMenuLayer();
        this.addChild(node);
        this.menuLayer = node;
    },
    //创建菜单时发生的动作
    onCreateMenuLayer : function(event) {
        var self = event.getCurrentTarget();
        self.loadMenuLayer();
    },
    //移除菜单时发生的动作
    onRemoveMenuLayer : function(event){
        var self = event.getCurrentTarget();
        self.removeChild(self.menuLayer);
    }
});