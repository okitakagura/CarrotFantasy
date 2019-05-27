
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        var size = cc.winSize;

        //var mainscene = ccs.load(res.MainScene_json);
        //var mainscene =ccs.load(res.scene1_json);
        //添加主界面mainscene
        var mainscene=ccs.load(res.scene_json);
        this.addChild(mainscene.node);

        //this.addChild(mainscene.node);
        //给设置按钮添加监听
        var bnt_shezhi=ccui.helper.seekWidgetByName(mainscene.node,"bntshezhi");
       bnt_shezhi.addTouchEventListener(this.bnt_shezhiTouch,this);
        //添加冒险模式按钮
        var bnt_maoxian=ccui.helper.seekWidgetByName(mainscene.node,"bntmaoxian");
        bnt_maoxian.addTouchEventListener(this.bnt_maoxianTouch,this);
        //var bnt_maoxian=ccui.helper.seekWidgetByName("bntmaoxian");
        
        return true;
    },
    //设置监听
    bnt_shezhiTouch:function(render,type){
    	if(type==ccui.Widget.TOUCH_ENDED)
    		{
    		//cc.log("11");
    		cc.director.runScene(new scene2());
    		}
    },
    bnt_maoxianTouch:function(render,type){
    	if(type==ccui.Widget.TOUCH_ENDED)
    		{
    		//cc.log("11");
    		cc.director.runScene(new maoxianscene1());
    		}
    }
});

var scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        //cc.audioEngine.playMusic(res.BGMusic);
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
var scene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer2();
        this.addChild(layer);
    }
});
var HelloWorldLayer2 = cc.Layer.extend({
    sprite:null,
    startEffectoff:null,
    startEffecton:null,
    startSpriteoff:null,
    startSpriteon:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        var size = cc.winSize;
         //加载设置界面


        //var mainscene = ccs.load(res.MainScene_json);
        var mainscene1 =ccs.load(res.scene1_json);
       this.addChild(mainscene1.node);
       //获取home按钮
        var home=ccui.helper.seekWidgetByName(mainscene1.node,"bnt_setting_home");
        home.setTouchEnabled(true);
        home.addTouchEventListener(this.bntReturnHome,this);
        //设置音乐开关
        startSpriteoff= cc.Sprite.create(res.bgmusic_off);
        startSpriteon= cc.Sprite.create(res.bgmusic_on);
        startSpriteoff.setOpacity(255);
        startSpriteon.setOpacity(0);
        startSpriteoff.setPosition(size.width/2+150,size.height/2+80);
        startSpriteon.setPosition(size.width/2+150,size.height/2+80);
        startSpriteoff.setLocalZOrder(10);
        startSpriteon.setLocalZOrder(5);
        this.addChild(startSpriteoff);
        this.addChild(startSpriteon);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:this.onTouchBegan,
            onTouchMoved:this.onTouchMoved,
            onTouchEnded:this.onTouchEnded

        },startSpriteoff);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:this.onTouchBegan2,
            onTouchMoved:this.onTouchMoved2,
            onTouchEnded:this.onTouchEnded2

        },startSpriteon);
        //设置音效开关
        startEffectoff= cc.Sprite.create(res.gamecenter_off);
        startEffecton= cc.Sprite.create(res.gamecenter_on);
        startEffecton.setOpacity(0);
        startEffectoff.setPosition(size.width/2-160,size.height/2+80);
        startEffecton.setPosition(size.width/2-160,size.height/2+80);
        startEffectoff.setLocalZOrder(10);
        startEffecton.setLocalZOrder(5);
        this.addChild(startEffectoff);
        this.addChild(startEffecton);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:this.onTouchEffBegan,
            onTouchMoved:this.onTouchEffMoved,
            onTouchEnded:this.onTouchEffEnded

        },startEffectoff);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:this.onTouchEffBegan2,
            onTouchMoved:this.onTouchEffMoved2,
            onTouchEnded:this.onTouchEffEnded2

        },startEffecton);
        //var bnt_maoxian=ccui.helper.seekWidgetByName("bntmaoxian");
        this.playeffectflag=true;
       // this.p
        //获取重置游戏按钮
        var resetGame=ccui.helper.seekWidgetByName(mainscene1.node,"resetGame");
        resetGame.setTouchEnabled(true);
        resetGame.addTouchEventListener(this.resetGame,this);

        return true;
    },
    resetGame:function () {
        cc.sys.localStorage.clear();
        cc.log("重置成功！");
    },

    bntReturnHome:function () {
      cc.director.runScene(new scene());
    },
    /*menuItemStartCallback:function()
    {
        if(this.playmusicflag){
            cc.log("播放音乐");
            cc.audioEngine.playMusic(res.BGMusic);
            startSpriteon.setLocalZOrder("10");
            startSpriteoff.setLocalZOrder("5");
            this.playmusicflag=false;
        }
        else {
            cc.log("暂停音乐");
            cc.audioEngine.pauseMusic();
            startSpriteon.setLocalZOrder("5");
            startSpriteoff.setLocalZOrder("10");
            this.playmusicflag=true;
        }
    },*/
    //音乐监听
    onTouchBegan:function(touch,event){
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            cc.log("onTouchBegan"+touch.getLocationX()+","+touch.getLocationY());
            return true;
        }
        return false;
       // else return false;
    },
    onTouchMoved:function(touch,event){

        cc.log("onTouchMove");
        return true;
    },
    onTouchEnded:function(touch,event){

        cc.log("播放音乐");
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            startSpriteoff.setOpacity(0);
            startSpriteon.setOpacity(255);
            cc.audioEngine.playMusic(res.BGMusic);
            startSpriteon.setLocalZOrder(10);
            startSpriteoff.setLocalZOrder(5);
            this.playmusicflag=false;
            //target.opacity = 180;
            return true;
        }
        return false;
       // else return false;
       // cc.event.getCurrentTarget()


    },
    onTouchBegan2:function(touch,event){
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            cc.log("onTouchBegan"+touch.getLocationX()+","+touch.getLocationY());
            return true;
        }
        return false;
        //else return false;
    },
    onTouchMoved2:function(touch,event){
       // var target=event.currentTarget;
       // target.setOpacity(100);
        cc.log("onTouchMove");
        return true;
    },
    onTouchEnded2:function(touch,event){
        //target=event.get
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            startSpriteoff.setOpacity(255);
            startSpriteon.setOpacity(0);
            cc.audioEngine.pauseMusic();
            startSpriteon.setLocalZOrder(5);
            startSpriteoff.setLocalZOrder(10);
            this.playmusicflag = true;
           // target.opacity = 180;
            return true;
        }
        return false;
        //else return false;
    },
  //音效监听
    onTouchEffBegan:function(touch,event){
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            cc.log("onTouchBegan"+touch.getLocationX()+","+touch.getLocationY());
            return true;
        }
        return false;
        // else return false;
    },
    onTouchEffMoved:function(touch,event){

        cc.log("onTouchMove");
        return true;
    },
    onTouchEffEnded:function(touch,event){

        cc.log("播放音乐");
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            startEffectoff.setOpacity(0);
            startEffecton.setOpacity(255);
            cc.audioEngine.playMusic(res.BGMusic);
            startEffecton.setLocalZOrder(10);
            startEffectoff.setLocalZOrder(5);
            this.playmusicflag=false;
            //target.opacity = 180;
            return true;
        }
        return false;
        // else return false;
        // cc.event.getCurrentTarget()


    },
    onTouchEffBegan2:function(touch,event){
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            cc.log("onTouchBegan"+touch.getLocationX()+","+touch.getLocationY());
            return true;
        }
        return false;
        //else return false;
    },
    onTouchEffMoved2:function(touch,event){
        // var target=event.currentTarget;
        // target.setOpacity(100);
        cc.log("onTouchMove");
        return true;
    },
    onTouchEffEnded2:function(touch,event){
        //target=event.get
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            startEffectoff.setOpacity(255);
            startEffecton.setOpacity(0);
            cc.audioEngine.pauseMusic();
            startEffecton.setLocalZOrder(5);
            startEffectoff.setLocalZOrder(10);
            this.playmusicflag = true;
            // target.opacity = 180;
            return true;
        }
        return false;
        //else return false;
    },
});


