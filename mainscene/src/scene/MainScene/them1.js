var map01scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map01layer();
            this.addChild(layer);
        }
    }
)
var map01layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景

        cc.spriteFrameCache.addSpriteFrames(res.themescene3_plist,res.themescene3_png);
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);


        //选择关卡标签
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //next按钮
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //加载map1
        cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map01.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_15.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
     //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);
        bntStartGame.setScale(2);
        this.addChild(bntStartGame);
        return true;
    },
    //返回监听
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map02scene());

        }
    },
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.director.runScene(new  maoxianscene1());
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.LoaderScene.preload(g_gamePlay_resources, function () {
                GameManager.loadLevelData(0);  // 加载第一关的数据
                cc.director.runScene(new GamePlayScene());
            }, this);


        }
    }
})
var map02scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map02layer();
            this.addChild(layer);
        }
    }
)
//地图2
var map02layer=cc.Layer.extend({
    sprite:null,
    isUnLock:false,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);

        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map02.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_15.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();


        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_02.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);

        //加载配置
        this.isUnLock=cc.sys.localStorage.getItem(Config.ISTWO_UNLOCK_KEY) || "NO";
        if(this.isUnLock=="NO"){
            var lock=cc.Sprite.create("#ss_locked_CN.png");
            lock.setPosition(size.width/2,size.height/4-70);
            this.addChild(lock);
        }
        else {
            var bntStartGame=new ccui.Button();
            bntStartGame.setTouchEnabled(true);
            bntStartGame.setPressedActionEnabled(true);
            bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
            // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
            bntStartGame.addTouchEventListener(this.StartGame,this);
            bntStartGame.setPosition(size.width/2,size.height/4-70);
            bntStartGame.setScale(2);
            this.addChild(bntStartGame);
        }

        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {

            cc.LoaderScene.preload(g_gamePlay_resources, function () {
                GameManager.loadLevelData(1);  // 加载第一关的数据
                cc.director.runScene(new GamePlayScene());
            }, this);

        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map03scene());

        }
    },
    pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
         cc.director.runScene(new map01scene);
         //this.addChild(layer)
         }
     }
})
//地图三
var map03scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map03layer();
            this.addChild(layer);
        }
    }
)
//地图3
var map03layer=cc.Layer.extend({
    sprite:null,
    isUnLock:false,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);

        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map03.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_20.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_03.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //加载配置
        this.isUnLock=cc.sys.localStorage.getItem(Config.ISFOUR_UNLOCK_KEY) || "YES";
        if(this.isUnLock=="NO"){
            var lock=cc.Sprite.create("#ss_locked_CN.png");
            lock.setPosition(size.width/2,size.height/4-70);
            this.addChild(lock);
        }
        else {
            var bntStartGame=new ccui.Button();
            bntStartGame.setTouchEnabled(true);
            bntStartGame.setPressedActionEnabled(true);
            bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
            // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
            bntStartGame.addTouchEventListener(this.StartGame,this);
            bntStartGame.setPosition(size.width/2,size.height/4-70);
            bntStartGame.setScale(2);
            this.addChild(bntStartGame);
        }
        //加载下一个按钮
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.LoaderScene.preload(g_gamePlay_resources, function () {
                GameManager.loadLevelData(2);  // 加载第一关的数据
                cc.director.runScene(new GamePlayScene());
            }, this);
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map04scene());

        }
    },
    pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map02scene());
         //this.addChild(layer)
         }
     }
})
//地图4
var map04scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map04layer();
            this.addChild(layer);
        }
    }
)

var map04layer=cc.Layer.extend({
    sprite:null,
    isUnLock:false,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);

        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map04.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_20.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_04.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //加载配置
        this.isUnLock=cc.sys.localStorage.getItem(Config.ISFOUR_UNLOCK_KEY) || "NO";
        if(this.isUnLock=="NO"){
            var lock=cc.Sprite.create("#ss_locked_CN.png");
            lock.setPosition(size.width/2,size.height/4-70);
            this.addChild(lock);
        }
        else {
            var bntStartGame=new ccui.Button();
            bntStartGame.setTouchEnabled(true);
            bntStartGame.setPressedActionEnabled(true);
            bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
            // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
            bntStartGame.addTouchEventListener(this.StartGame,this);
            bntStartGame.setPosition(size.width/2,size.height/4-70);
            bntStartGame.setScale(2);
            this.addChild(bntStartGame);
        }
        //加载下一个按钮
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.LoaderScene.preload(g_gamePlay_resources, function () {
                GameManager.loadLevelData(4);  // 加载第一关的数据
                cc.director.runScene(new GamePlayScene());
            }, this);
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map05scene());

        }
    },
     pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map03scene());
         //this.addChild(layer)
         }
     }
})
//地图5
var map05scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map05layer();
            this.addChild(layer);
        }
    }
)

var map05layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map05.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_20.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_05.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var lock=cc.Sprite.create("#ss_locked_CN.png");
        lock.setPosition(size.width/2,size.height/4-70);
        this.addChild(lock);
        /*var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);

        this.addChild(bntStartGame);*/
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("22");
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map06scene());

        }
    },
     pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map04scene);
         //this.addChild(layer)
         }
     }
})
//地图6
var map06scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map06layer();
            this.addChild(layer);
        }
    }
)

var map06layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);

        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map06.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_25.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_06.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var lock=cc.Sprite.create("#ss_locked_CN.png");
        lock.setPosition(size.width/2,size.height/4-70);
        this.addChild(lock);
        /*var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);

        this.addChild(bntStartGame);*/
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("22");
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map07scene());

        }
    },
    pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map05scene());
         //this.addChild(layer)
         }
     }
})
//地图7
var map07scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map07layer();
            this.addChild(layer);
        }
    }
)
//图层7
var map07layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);

        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map07.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_20.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_07.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var lock=cc.Sprite.create("#ss_locked_CN.png");
        lock.setPosition(size.width/2,size.height/4-70);
        this.addChild(lock);
        /*var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);

        this.addChild(bntStartGame);*/
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("22");
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map08scene());

        }
    },
     pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map06scene());
         //this.addChild(layer)
         }
     }
})
//地图8
var map08scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map08layer();
            this.addChild(layer);
        }
    }
)
//地图8
var map08layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);

        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map08.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_25.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();

        back.setTouchEnabled(true);

        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_08.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var lock=cc.Sprite.create("#ss_locked_CN.png");
        lock.setPosition(size.width/2,size.height/4-70);
        this.addChild(lock);
        /*var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);

        this.addChild(bntStartGame);*/
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("22");
        }
    },
    next:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            //cc.log("11");
            cc.director.runScene(new map09scene());

        }
    },
    pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map07scene());
         //this.addChild(layer)
         }
     }
})
//地图9
var map09scene=cc.Scene.extend(
    {
        onEnter:function(){
            this._super();
            var layer=new  map09layer();
            this.addChild(layer);
        }
    }
)
//地图2
var map09layer=cc.Layer.extend({
    sprite:null,
    ctor:function  (){
        this._super();
        var size=cc.winSize;
        //ss_back_normal.png
        //加载返回按钮
        //#ss_bg.png does not exist
        //CCDebugger.js:331 #ss_map01.png does not exist
        //CCDebugger.js:331 #ss_towers_01.png does not exist
        //cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //背景
        var bg=cc.Sprite.create("#theme_bg.png");
        bg.setScale(1.5384615)
        //var bg=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_bg.png"));
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);

        //加载map1
        //cc.spriteFrameCache.addSpriteFrames(res.stages_them1_plist,res.stages_them1_png);
        var pig=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_map09.png"));
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //wave波叔设置
        var wave=cc.Sprite.create("#ss_waves_20.png");
        wave.setPosition(size.width/2,size.height-150);
        wave.setScale(2);
        this.addChild(wave);
        var back=new ccui.Button();


        back.setTouchEnabled(true);
        back.setPressedActionEnabled(true);
        back.loadTextures("res/ss_back_normal.png","res/ss_back_pressed.png","");
        //  back.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),cc.spriteFrameCache.getSpriteFrame("ss_towers_01.png"),"");
        back.addTouchEventListener(this.backed,this);
        back.setPosition(30,size.height-30);
        back.setScale(2.0);
        this.addChild(back);
        //添加炮塔1
        var tow_1=cc.Sprite.create(cc.spriteFrameCache.getSpriteFrame("ss_towers_09.png"));
        tow_1.setPosition(size.width/2,size.height/4-20);
        this.addChild(tow_1);
        //添加开始按钮
        var lock=cc.Sprite.create("#ss_locked_CN.png");
        lock.setPosition(size.width/2,size.height/4-70);
        this.addChild(lock);
        /*var bntStartGame=new ccui.Button();
        bntStartGame.setTouchEnabled(true);
        bntStartGame.setPressedActionEnabled(true);
        bntStartGame.loadTextures("res/ss_play_normal_CN.png","res/ss_play_pressed_CN.png","");
       // bntStartGame.loadTextures(cc.spriteFrameCache.getSpriteFrame("ss_play_normal_CN.png"),cc.spriteFrameCache.getSpriteFrame("ss_play_pressed_CN"),"");
        bntStartGame.addTouchEventListener(this.StartGame,this);
        bntStartGame.setPosition(size.width/2,size.height/4-70);

        this.addChild(bntStartGame);*/
        //设置左按钮
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
        return true;
    },
    //返回监听
    backed:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("11");
        }

    },
    StartGame:function(obj,type){
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.log("22");
        }
    },

    pre:function(obj,type)
     {
         if(type==ccui.Widget.TOUCH_ENDED)
         {
         //cc.log("11");
             cc.director.runScene(new map08scene());
         //this.addChild(layer)
         }
     }
})