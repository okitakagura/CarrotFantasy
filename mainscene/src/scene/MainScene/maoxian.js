//冒险模式主界面
var maoxianscene1= cc.Scene.extend({
    onEnter:function () {
        this._super();
        var size = cc.winSize;
        /*cc.spriteFrameCache.addSpriteFrames(res.darkbg_plist,res.darkbg_png);
        var background=cc.Sprite.create("#darkbg.png");
        background.setPosition(size.width/2,size.height/2);
        this.addChild(background);*/
        //加载背景plist
        cc.spriteFrameCache.addSpriteFrames(res.stages_bg_plist,res.stages_bg_png);
        //加载场景图片
        cc.spriteFrameCache.addSpriteFrames(res.themescene1_plist,res.themescene1_png);
        cc.spriteFrameCache.addSpriteFrames(res.themescene2_plist,res.themescene2_png);
        cc.spriteFrameCache.addSpriteFrames(res.themescene3_plist,res.themescene3_png);
        var layer = new maoxianLayer1();
        this.addChild(layer);
    }
});
//第一大关
var maoxianLayer1 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        //添加背景图片
        this.addBackground();
        this.addSelectImage();
        this.addHomeButton();
        this.addMapimage();
        this.addNextMap();
        return true;
    },

    //添加背景图片
    addBackground:function () {
        var size = cc.winSize;
        //var bg=cc.Sprite.create("#theme_bg.png");
        //bg.setScale(1.5384615)
        var bg=cc.Sprite.create("res/xuanguan/themescene3-hd.png");
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
    },
    //添加选择关卡标签
    addSelectImage:function () {
        var size = cc.winSize;
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);
    },
    //添加返回Home页面按钮
    addHomeButton:function () {
        var size = cc.winSize;
        var home=new ccui.Button();
        home.setTouchEnabled(true);
        home.setPressedActionEnabled(true);
        home.loadTextures(res.home_normal,res.home_pressed,"");
        home.addTouchEventListener(this.bntReturnHome,this);
        home.setPosition(30,size.height-30);
        this.addChild(home);
    },
    //添加地图图片
    addMapimage:function () {
        var size = cc.winSize;
        var pig=cc.Sprite.create("#theme_pack01.png");
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        //添加显示地图数量图片
        var mapnum=cc.Sprite.create("#theme_pack01_CN.png");
        mapnum.setPosition(size.width/4*2,size.height/4*2+10);
        mapnum.setScale(0.6);
        this.addChild(mapnum);
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            target:pig,
            onTouchBegan:this.onTouchBegan,
            onTouchMoved:this.onTouchMoved,
            onTouchEnded:this.onTouchEnded

        },pig);
    },
    //下一地图按钮
    addNextMap:function () {
        var size = cc.winSize;
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.selectnext,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
    },
    selectnext:function(obj,type)
    {
        if(type==ccui.Widget.TOUCH_ENDED)
        {
            cc.director.runScene(new maoxianscene2());

        }
    },
    //返回home
    bntReturnHome:function(obj,type)
    {
    	if(type==ccui.Widget.TOUCH_ENDED)
		{
            cc.director.runScene(new scene());
		}
    },
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
    },
    onTouchMoved:function(touch,event){
        cc.log("onTouchMove");
        return true;
    },
    onTouchEnded:function(touch,event){
        var target=event.getCurrentTarget();
        var locationInNode=target.convertToNodeSpace(touch.getLocation());
        var s=target.getContentSize();
        var rect=cc.rect(0,0,s.width,s.height);
        if(cc.rectContainsPoint(rect,locationInNode))
        {
            cc.director.runScene(new map01scene());
            return true;
        }
        return false;

        //return true;
    }
  
});
//第二大关
var maoxianscene2= cc.Scene.extend({
    onEnter:function () {
        this._super();
        var size = cc.winSize;

        //cc.spriteFrameCache.addSpriteFrames(res.themescene2_plist,res.themescene2_png);
        var layer = new maoxianLayer2();
        this.addChild(layer);
    }
});
var maoxianLayer2 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        this.addBackground();
        this.addSelectImage();
        this.addMapimage();
        this.addNextMap();
        this.addSelectPreButton();
        
        return true;
    },
    addBackground:function () {
        var size = cc.winSize;
        //var bg=cc.Sprite.create("#theme_bg.png");
        //bg.setScale(1.5384615)
        var bg=cc.Sprite.create("res/xuanguan/themescene3-hd.png");
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
    },
    addSelectImage:function () {
        var size = cc.winSize;
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);

    },
    addSelectPreButton:function () {
        var size = cc.winSize;
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");

        pre.addTouchEventListener(this.pre,this);

        pre.setPosition(50,size.height/2);
        this.addChild(pre);
    },
    addMapimage:function () {
        var size = cc.winSize;
        var pig=cc.Sprite.create("#theme_pack02.png");
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        var mapnum=cc.Sprite.create("#theme_pack02_CN.png");
        mapnum.setPosition(size.width/4*2,size.height/4*2+10);
        mapnum.setScale(0.6);
        this.addChild(mapnum);
    },
    addNextMap:function () {
        var size = cc.winSize;
        var next=new ccui.Button();
        next.setTouchEnabled(true);
        next.setPressedActionEnabled(true);
        next.loadTextures(res.theme_pointright_normal,res.theme_pointright_pressed,"");

        next.addTouchEventListener(this.next,this);

        next.setPosition(size.width-50,size.height/2);
        this.addChild(next);
    },
    next:function(obj,type)
    {
    	if(type==ccui.Widget.TOUCH_ENDED)
		{
		//cc.log("11");
    	cc.director.runScene(new maoxianscene3());
		
		}
    },
   pre:function(obj,type)
    {
    	if(type==ccui.Widget.TOUCH_ENDED)
		{
		//cc.log("11");
            cc.director.runScene(new maoxianscene1);
		//this.addChild(layer)
		}
    }
  
});
//第三大关
var maoxianscene3= cc.Scene.extend({
    onEnter:function () {
        this._super();
        var size = cc.winSize;
        var label = cc.LabelTTF.create("选择关卡", "Arial", 50);
        label.setPosition(size.width/2, size.height-20);
        label.setColor(cc.color.RED);
        this.addChild(label);
        //cc.spriteFrameCache.addSpriteFrames(res.themescene2_plist,res.themescene2_png);
        var layer = new maoxianLayer3();
        this.addChild(layer);
    }
});
var maoxianLayer3 = cc.Layer.extend({

   ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        //cc.spriteFrameCache.addSpriteFrames(res.themescene2_plist,res.themescene2_png);
       this.addBackground();
       this.addSelectImage();
       this.addMapimage();
       this.addSelectPreButton();
        return true;
    },
    //设置监听
    addBackground:function () {
        var size = cc.winSize;
        //var bg=cc.Sprite.create("#theme_bg.png");
        //bg.setScale(1.5384615)
        var bg=cc.Sprite.create("res/xuanguan/themescene3-hd.png");
        bg.setPosition(size.width/2,size.height/2);
        this.addChild(bg);
    },
    addSelectImage:function () {
        var size = cc.winSize;
        var xuanzeguanka=cc.Sprite.create("res/xuanguan/theme_bg_CN.png");
        xuanzeguanka.setPosition(size.width/2,size.height-30);
        this.addChild(xuanzeguanka);

    },
    addSelectPreButton:function () {
        var size = cc.winSize;
        var pre=new ccui.Button();
        pre.setTouchEnabled(true);
        pre.setPressedActionEnabled(true);
        pre.loadTextures(res.theme_pointleft_normal,res.theme_pointleft_pressed,"");
        pre.addTouchEventListener(this.pre,this);
        pre.setPosition(50,size.height/2);
        this.addChild(pre);
    },
    addMapimage:function () {
        var size = cc.winSize;
        var pig=cc.Sprite.create("#theme_pack03.png");
        pig.setPosition(size.width/2,size.height/2);
        this.addChild(pig);
        var mapnum=cc.Sprite.create("#theme_pack03_CN.png");
        mapnum.setPosition(size.width/4*2,size.height/4*2+10);
        mapnum.setScale(0.6);
        this.addChild(mapnum);
    },
    pre:function(obj,type)
    {
    	if(type==ccui.Widget.TOUCH_ENDED)
		{
		cc.director.runScene(new maoxianscene2())

		}
    }
});
//设置场景





