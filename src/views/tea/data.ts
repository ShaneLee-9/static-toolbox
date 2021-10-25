export interface DataItem {
  id: number
  name: string
  children?: DataItem[]
}

const data: DataItem[] = [
  {
    id: 1,
    name: '绿茶',
    children: [
      {
        id: 11,
        name: '西湖龙井',
        children: [
          { id: 111, name: '贡牌' },
          { id: 112, name: '狮牌' },
          { id: 113, name: '卢正浩' },
          { id: 114, name: '西湖' },
          { id: 115, name: '御牌' }
        ]
      },
      {
        id: 12,
        name: '洞庭碧螺春',
        children: [
          { id: 121, name: '碧螺' },
          { id: 122, name: '吴侬' },
          { id: 123, name: '咏萌' },
          { id: 124, name: '玉露春' },
          { id: 125, name: '三万昌' }
        ]
      },
      {
        id: 13,
        name: '安吉白茶',
        children: [
          { id: 131, name: '宋茗' },
          { id: 132, name: '芳羽' },
          { id: 133, name: '极白' },
          { id: 134, name: '艺福堂' },
          { id: 135, name: '甄熙茗品' }
        ]
      },
      {
        id: 14,
        name: '黄山毛峰',
        children: [
          { id: 141, name: '谢裕大' },
          { id: 142, name: '天方' },
          { id: 143, name: '奇松' },
          { id: 144, name: '耕香园' },
          { id: 145, name: '猴坑' }
        ]
      },
      {
        id: 15,
        name: '都匀毛尖',
        children: [
          { id: 151, name: '贵山' },
          { id: 152, name: '天城香' },
          { id: 153, name: '贵天下' },
          { id: 154, name: '兰馨' },
          { id: 155, name: '雾庄玉叶' }
        ]
      },
      {
        id: 16,
        name: '太平猴魁',
        children: [
          { id: 161, name: '猴坑' },
          { id: 162, name: '耕香园' },
          { id: 163, name: '谢裕大' },
          { id: 164, name: '迎客松' },
          { id: 165, name: '金魁' }
        ]
      },
      {
        id: 17,
        name: '信阳毛尖',
        children: [
          { id: 171, name: '龙潭' },
          { id: 172, name: '蓝天茗茶' },
          { id: 173, name: '新林玉露' },
          { id: 174, name: '广义' },
          { id: 175, name: '文新' }
        ]
      },
      {
        id: 18,
        name: '六安瓜片',
        children: [
          { id: 181, name: '徽六' },
          { id: 182, name: '黄之江' },
          { id: 183, name: '谢裕大' },
          { id: 184, name: '抱儿钟秀' },
          { id: 185, name: '徽将军' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '白茶',
    children: [
      {
        id: 21,
        name: '白毫银针',
        children: [
          { id: 211, name: '品品香' },
          { id: 212, name: '绿雪芽' },
          { id: 213, name: '大沁白茶' },
          { id: 214, name: '中茶蝴蝶牌' },
          { id: 215, name: '馥益堂' }
        ]
      },
      {
        id: 22,
        name: '白牡丹',
        children: [
          { id: 221, name: '品品香' },
          { id: 222, name: '六妙' },
          { id: 223, name: '本源香艺' },
          { id: 224, name: '政名' },
          { id: 225, name: '张元记' }
        ]
      },
      {
        id: 23,
        name: '贡眉（寿眉）',
        children: [
          { id: 231, name: '绿雪芽' },
          { id: 232, name: '品品香' },
          { id: 233, name: '张元记' },
          { id: 234, name: '馥益堂' },
          { id: 235, name: '天毫' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '黄茶',
    children: [
      {
        id: 31,
        name: '君山银针',
        children: [
          { id: 311, name: '君山' },
          { id: 312, name: '湘军' },
          { id: 313, name: '未尝' },
          { id: 314, name: '艺福堂' },
          { id: 315, name: '湖心岛' }
        ]
      },
      {
        id: 32,
        name: '蒙顶黄芽',
        children: [
          { id: 321, name: '蒙顶山茶' },
          { id: 322, name: '跃华茶' },
          { id: 323, name: '味独珍' },
          { id: 324, name: '天福茗茶' }
        ]
      },
      {
        id: 33,
        name: '霍山黄芽',
        children: [
          { id: 331, name: '齐顶山' },
          { id: 332, name: '徽六' },
          { id: 333, name: '徽将军' },
          { id: 334, name: '天方' },
          { id: 335, name: '九华山' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '青茶',
    children: [
      {
        id: 41,
        name: '铁观音',
        children: [
          { id: 411, name: '八马' },
          { id: 412, name: '华祥苑' },
          { id: 413, name: '中闽魏氏' },
          { id: 414, name: '天福茗茶' },
          { id: 415, name: '感德龙馨' }
        ]
      },
      {
        id: 42,
        name: '大红袍',
        children: [
          { id: 421, name: '武夷星' },
          { id: 422, name: '北岩' },
          { id: 423, name: '孝文家茶' },
          { id: 424, name: '天福茗茶' },
          { id: 425, name: '八马' }
        ]
      },
      {
        id: 43,
        name: '凤凰水仙',
        children: [
          { id: 431, name: '天池茶叶' },
          { id: 432, name: '陌岚' },
          { id: 433, name: '宋凰' },
          { id: 434, name: '陆宇' },
          { id: 435, name: '狮头脚' }
        ]
      },
      {
        id: 44,
        name: '台湾乌龙',
        children: [
          { id: 441, name: '天仁茗茶' },
          { id: 442, name: '王德传' },
          { id: 443, name: '名池' },
          { id: 444, name: '新凤鸣' },
          { id: 445, name: '福寿长春茶' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: '红茶',
    children: [
      {
        id: 51,
        name: '祁门红茶',
        children: [
          { id: 511, name: '天之红' },
          { id: 512, name: '祥源茶' },
          { id: 513, name: '润思' },
          { id: 514, name: '天方' },
          { id: 515, name: '祁野' }
        ]
      },
      {
        id: 52,
        name: '正山小种',
        children: [
          { id: 521, name: '正山堂' },
          { id: 522, name: '元正' },
          { id: 523, name: '骏德' },
          { id: 524, name: '武夷星' },
          { id: 525, name: '中闽一品' }
        ]
      },
      {
        id: 53,
        name: '金骏眉',
        children: [
          { id: 531, name: '正山堂' },
          { id: 532, name: '元正' },
          { id: 533, name: '骏德' },
          { id: 534, name: '张一元' },
          { id: 535, name: '日春' }
        ]
      },
      {
        id: 54,
        name: '滇红',
        children: [
          { id: 541, name: '凤牌' },
          { id: 542, name: '蒲门' },
          { id: 543, name: '茗纳百川' },
          { id: 544, name: '玉林' },
          { id: 545, name: '凤合堂' }
        ]
      },
      {
        id: 55,
        name: '英德红茶',
        children: [
          { id: 551, name: '怡品茗' },
          { id: 552, name: '鸿雁' },
          { id: 553, name: '八百秀才' },
          { id: 554, name: '向天湖' },
          { id: 555, name: '我和你' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '黑茶',
    children: [
      {
        id: 61,
        name: '湖南安化黑茶',
        children: [
          { id: 611, name: '白沙溪' },
          { id: 612, name: '百年木仓' },
          { id: 613, name: '湘益' },
          { id: 614, name: '湘丰' },
          { id: 615, name: '高马二溪' }
        ]
      },
      {
        id: 62,
        name: '四川藏茶',
        children: [
          { id: 621, name: '雅安藏茶' },
          { id: 622, name: '一味藏茶' },
          { id: 623, name: '古格' },
          { id: 624, name: '南方心心' },
          { id: 625, name: '格登巴' }
        ]
      },
      {
        id: 63,
        name: '广西六堡茶',
        children: [
          { id: 631, name: '三鹤' },
          { id: 632, name: '中茶' },
          { id: 633, name: '熹誉' },
          { id: 634, name: '苍松' },
          { id: 635, name: '圣源' }
        ]
      },
      {
        id: 64,
        name: '千两茶',
        children: [
          { id: 641, name: '白沙溪' },
          { id: 642, name: '中茶' },
          { id: 643, name: '怡清源' },
          { id: 644, name: '高马二溪' },
          { id: 645, name: '湘丰' }
        ]
      },
      {
        id: 65,
        name: '茯砖茶',
        children: [
          { id: 651, name: '白沙溪' },
          { id: 652, name: '天福茗茶' },
          { id: 653, name: '八马' },
          { id: 654, name: '湘益' },
          { id: 655, name: '湘丰' }
        ]
      },
      {
        id: 66,
        name: '普洱',
        children: [
          { id: 661, name: '大益' },
          { id: 662, name: '老同志' },
          { id: 663, name: '中茶' },
          { id: 664, name: '陈升号' },
          { id: 665, name: '斗记' }
        ]
      }
    ]
  },
  {
    id: 7,
    name: '花茶',
    children: [
      {
        id: 71,
        name: '玫瑰花茶',
        children: [
          { id: 711, name: '无' }
        ]
      },
      {
        id: 72,
        name: '茉莉花茶',
        children: [
          { id: 721, name: '无' }
        ]
      },
      {
        id: 73,
        name: '金银花茶',
        children: [
          { id: 731, name: '无' }
        ]
      },
      {
        id: 74,
        name: '百合花茶',
        children: [
          { id: 741, name: '无' }
        ]
      }
    ]
  }
]

export default data
