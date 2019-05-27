var LevelData = [
    {   // 第1关
        themeID         : 1,            // 主题
        group           : 6,            // 组数
        gold            : 200,          // 初始金币
        enemyInterval   : 1,            // 刷怪时间间隔
        groupInterval   : 1,            // 组数时间间隔
        levelName       : "level 1",    // 关卡名字
        blood           : 10,           // 萝卜血量

        monsterGroup : [    // 每一关的怪物数据
            {   // 第1组
                index : 1,
                team : [
                    { name : "L11", count : 5, blood : 5.0, speed : 180 ,cost:10}
                ]
            },{// 第2组
                index : 2,
                team : [
                    { name : "L21", count : 5, blood : 10.0, speed : 180 ,cost:10}
                ]
            },{// 第3组
                index : 3,
                team : [
                    { name : "L21", count : 5, blood : 20.0, speed : 180 ,cost:10},
                    { name : "L31", count : 10, blood : 15.0, speed : 180 ,cost:15}
                ]
            },{// 第4组
                index : 4,
                team : [
                    { name : "L11", count : 5, blood : 20.0, speed : 180 ,cost:20}
                ]
            },{// 第5组
                index : 5,
                team : [
                    { name : "L31", count : 5, blood : 40.0, speed : 180 ,cost:40},
                    { name : "L11", count : 5, blood : 40.0, speed : 180 ,cost:40},
                    { name : "L21", count : 5, blood : 45.0, speed : 180 ,cost:45}
                ]
            },{// 第6组
                index : 6,
                team : [
                    { name : "L31", count : 5, blood : 50.0, speed : 180 ,cost:50},
                    { name : "L11", count : 5, blood : 50.0, speed : 180 ,cost:50},
                    { name : "L21", count : 5, blood : 50.0, speed : 180 ,cost:50}
                ]
            }
        ]
    },
    {   // 第2关
        themeID         : 1,            // 主题
        group           : 10,           // 组数
        gold            : 250,          // 初始金币
        enemyInterval   : 1,            // 刷怪时间间隔
        groupInterval   : 3,            // 组数时间间隔
        levelName       : "level 2",    // 关卡名字
        bloodScale      : 0.3,          // 道具血量乘数
        blood           : 10,           // 萝卜血量

        monsterGroup : [
            {   // 第1组
                index : 1,
                team : [
                    { name : "F11",	count : 2,	blood : 10.0,	speed : 180,cost :20 },
                    { name : "L31", count : 8,	blood : 10.0,	speed : 180,cost :30 }
                ]
            },{// 第2组
                index : 2,
                team : [
                    { name : "F11",	count : 4,	blood : 10.0,	speed : 180 ,cost :20 },
                    { name : "L21", count : 5,	blood : 10.0,	speed : 180 ,cost :30 }
                ]
            },{// 第3组
                index : 3,
                team : [
                    { name : "F11",	count : 5,	blood : 15.0,	speed : 180 ,cost:40},
                    { name : "F21",	count : 5,	blood : 15.0,	speed : 180 ,cost:40}
                ]
            },{// 第4组
                index : 4,
                team : [
                    { name : "L11", count : 8,	blood : 20.0,	speed : 180 ,cost :50 },
                    { name : "L31",	count : 2,	blood : 20.0,	speed : 180 ,cost :50 }
                ]
            },{// 第5组
                index : 5,
                team : [
                    { name : "F11",	count : 6,	blood : 33.15,	speed : 180 ,cost :60 },
                    { name : "L11",	count : 2,	blood : 47.36,	speed : 180 ,cost :60 },
                    { name : "P11", count : 2,	blood : 56.84,	speed : 180 ,cost :70 }
                ]
            },{// 第6组
                index : 6,
                team : [
                    { name : "F11",	count : 2,	blood : 44.73,	speed : 180 ,cost :50 },
                    { name : "L31", count : 8,	blood : 63.90,	speed : 180 ,cost :50 }
                ]
            },{// 第7组
                index : 7,
                team : [
                    { name : "L11", count : 8,	blood : 60.44,	speed : 180 ,cost :50 },
                    { name : "F21",	count : 2,	blood : 45.31,	speed : 180,cost :50  }
                ]
            },{// 第8组
                index : 8,
                team : [
                    { name : "L31", count : 4,	blood : 96.98,	speed : 180 ,cost :50 },
                    { name : "P11", count : 6,	blood : 116.38,	speed : 180 ,cost :50 }
                ]
            },{// 第9组
                index : 9,
                team : [
                    { name : "F11",	count : 5,	blood : 79.47,	speed : 180 ,cost :50 },
                    { name : "F21",	count : 5,	blood : 79.47,	speed : 180 ,cost :50 }
                ]
            },{// 第10组
                index : 10,
                team : [
                    { name : "L11",	count : 5,	blood : 130.06,	speed : 180 ,cost :50 },
                    { name : "F11",	count : 5,	blood : 91.04,	speed : 180 ,cost :50 },
                    { name : "L21",	count : 5,	blood : 130.06,	speed : 180 ,cost :50 }
                ]
            }
        ]
    },
    {   // 第3关
        themeID         : 1,            // 主题
        group           : 15,           // 组数
        gold            : 300,          // 初始金币
        enemyInterval   : 1,            // 刷怪时间间隔
        groupInterval   : 3,            // 组数时间间隔
        levelName       : "level 3",    // 关卡名字
        bloodScale      : 0.3,          // 道具血量乘数
        blood           : 10,           // 萝卜血量

        monsterGroup : [
            {   // 第1组
                index : 1,
                team : [
                    { name : "L11",	count : 5,	blood : 5.0, speed : 180 ,cost :50 },
                    { name : "L21",	count : 5,	blood : 5.0, speed : 180 ,cost :50 }
                ]
            },{// 第2组
                index : 2,
                team : [
                    { name : "L21",	count : 5,	blood : 10.0, speed : 180 ,cost :50 },
                    { name : "L31",	count : 5,	blood : 10.0, speed : 180 ,cost :50 }
                ]
            },{// 第3组
                index : 3,
                team : [
                    { name : "L11",	count : 5,	blood : 15.0, speed : 180 ,cost :50 },
                    { name : "L31",	count : 5,	blood : 15.0, speed : 180 ,cost :50 }
                ]
            },{// 第4组
                index : 4,
                team : [
                    { name : "L21",	count : 5,	blood : 20.0, speed : 180 ,cost :50 },
                    { name : "L11",	count : 5,	blood : 20.0, speed : 180 ,cost :50 }
                ]
            },{// 第5组
                index : 5,
                team : [
                    { name : "P11",	count : 10,	blood : 50.0, speed : 180 ,cost :50 }
                ]
            },{// 第6组
                index : 6,
                team : [
                    { name : "P11",	count : 2,	blood : 80.0, speed : 180 ,cost :50 },
                    { name : "L11",	count : 8,	blood : 60.0, speed : 180 ,cost :50 }
                ]
            },{// 第7组
                index : 7,
                team : [
                    { name : "L31",	count : 4,	blood : 80.0, speed : 180 ,cost :50 },
                    { name : "P11",	count : 6,	blood : 100.0, speed : 180 ,cost :50 }
                ]
            },{// 第8组
                index : 8,
                team : [
                    { name : "L21",	count : 4,	blood : 100.0, speed : 180 ,cost :50 },
                    { name : "L31",	count : 6,	blood : 100.0, speed : 180 ,cost :50 }
                ]
            },{// 第9组
                index : 9,
                team : [
                    { name : "L11",	count : 2,	blood : 120.0, speed : 180 ,cost :50 },
                    { name : "P11",	count : 2,	blood : 140.0, speed : 180 ,cost :50 },
                    { name : "L21",	count : 6,	blood : 120.0, speed : 180 ,cost :50 }
                ]
            },{// 第10组
                index : 10,
                team : [
                    { name : "L21",	count : 5,	blood : 150.0, speed : 180 ,cost :50 },
                    { name : "L31",	count : 5,	blood : 150.0, speed : 180 ,cost :50 },
                    { name : "P11",	count : 2,	blood : 200.0, speed : 180 ,cost :50 }
                ]
            },{// 第11组
                index : 11,
                team : [
                    { name : "P11",	count : 2,	blood : 220.0, speed : 180 ,cost :50 },
                    { name : "L31",	count : 8,	blood : 170.0, speed : 180 ,cost :50 }
                ]
            },{// 第12组
                index : 12,
                team : [
                    { name : "L21",	count : 4,	blood : 200.0, speed : 180 ,cost :50 },
                    { name : "L11",	count : 6,	blood : 200.0, speed : 180 ,cost :50 }
                ]
            },{// 第13组
                index : 13,
                team : [
                    { name : "P11",	count : 6,	blood : 280.0, speed : 180 ,cost :50 },
                    { name : "L21",	count : 4,	blood : 240.0, speed : 180 ,cost :50 }
                ]
            },{// 第14组
                index : 14,
                team : [
                    { name : "L11",	count : 8,	blood : 280.0, speed : 180 ,cost :50 },
                    { name : "P11",	count : 2,	blood : 340.0, speed : 180 ,cost :50 }
                ]
            },{// 第15组
                index : 15,
                team : [
                    { name : "L21",	count : 5,	blood : 300.0, speed : 180 ,cost :50 },
                    { name : "P11",	count : 8,	blood : 350.0, speed : 180 ,cost :50 }
                ]
            }
        ]
    }
];
