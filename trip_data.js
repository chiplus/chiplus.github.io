const tripData = {
  title: "東京 6 日遊",
  subtitle: "享受現代與傳統的完美結合",
  meta: {
    startDate: "2026-02-15",
    endDate: "2026-02-20",
    hotels: [
      {
        day: "Day 1",
        name: "東京新宿N.U.T.S城市飯店",
        address: "東京都新宿区新宿1-16-5 160-0022",
        mapUrl: "https://maps.app.goo.gl/59JxWKPWvTZ44mrk6"
      },
      {
        day: "Day 2-3",
        name: "拉弗雷箱根強羅湯之棲飯店",
        address: "神奈川縣箱根町強羅1320 250-0408",
        mapUrl: "https://maps.app.goo.gl/FPcaxNN3K8eLnHAy5"
      },
      {
        day: "Day 4-5",
        name: "桜の川24池袋駅6分10人3臥室別墅",
        address: "東京都豐島區池袋3丁目25-10, 171-0014",
        mapUrl: "https://maps.app.goo.gl/MSKtGYdG1c5bmf5c6"
      }
    ]
  },
  flights: [
    {
      type: "Arrival",
      flightNo: "TR898",
      airline: "酷航",
      date: "2/15 (日)",
      departure: { time: "06:40", city: "台北 TPE" },
      arrival: { time: "10:40", city: "東京 NRT" },
      note: "06:00抵達桃園機場T1航廈，06:00-06:40登機手續，飛行時間3小時50分"
    },
    {
      type: "Departure",
      flightNo: "MM627",
      airline: "樂桃航空",
      date: "2/20 (五)",
      departure: { time: "22:05", city: "東京 NRT" },
      arrival: { time: "01:25", city: "台北 TPE" },
      note: "請於20:00前抵達機場辦理登機"
    }
  ],
  days: [
    {
      day: 1,
      date: "2/15 (日)",
      location: "抵達成田 & 淺草 & 新宿",
      color: "blue",
      highlights: ["成田機場", "淺草寺", "新宿飯店", "澀谷晚餐"],
      transport: "租車自駕",
      schedule: [
        { time: "06:40", title: "酷航 TR898 起飛", desc: "TPE → NRT，飛行時間3小時50分", icon: "plane" },
        { time: "10:40", title: "成田機場著陸", desc: "通關 + 領行李（停留1小時20分）", icon: "plane-arrival" },
        { time: "12:30", title: "成田機場租車", desc: "領取VOXY + ALPHARD，確認車況、GPS設定", icon: "car" },
        { time: "14:45", title: "往淺草寺出發", desc: "車程1小時50分", icon: "road" },
        { time: "15:45", title: "淺草寺參拜", desc: "👘參拜祈福、🌊傳統街道散策、📸打卡拍照、🛍️逛伴手禮（停留1小時45分）", icon: "torii-gate" },
        { time: "17:30", title: "往新宿N.U.T.S城市飯店Check-in", desc: "車程15-20分，Tel:03-5379-1041", icon: "road" },
        { time: "18:10", title: "往澀谷PARCO出發", desc: "車程15-20分，漢堡排M ¥1,750 + 套餐¥495，人均¥2,000-2,500（停留1小時30分）", icon: "road" },
      ]
    },
    {
      day: 2,
      date: "2/16 (日)",
      location: "箱根一日遊",
      color: "red",
      highlights: ["湯本商店街", "大涌谷", "箱根神社", "蘆之湖海盜船"],
      transport: "VOXY + ALPHARD 自駕（8人）",
      schedule: [
        { time: "08:00", title: "新宿N.U.T.S飯店出發", desc: "8人集結，VOXY + ALPHARD兩台車，車程1小時11分", icon: "car" },
        { time: "10:15", title: "湯本商店街", desc: "購買溫泉饅頭、伴手禮，停留40分鐘", icon: "shopping-bag" },
        { time: "10:55", title: "前往強羅", desc: "車程20分", icon: "road" },
        { time: "11:20", title: "田むら銀かつ亭午餐", desc: "炸豆腐排老店，豆腐かつ煮定食¥1,300/人，停留1小時30分", icon: "utensils" },
        { time: "13:50", title: "大涌谷觀光", desc: "黑蛋體驗(5個¥500)、火山噴氣景觀、眺望富士山，停留45分鐘", icon: "mountain" },
        { time: "14:20", title: "箱根神社參拜", desc: "本殿參拜、九頭龍神社新宮、拍照打卡，停留1小時15分", icon: "torii-gate" },
        { time: "15:35", title: "蘆之湖海盜船體驗", desc: "金色女王號，往返票¥2,220/人，乘船約1小時", icon: "ship" },
        { time: "19:45", title: "返回飯店", desc: "Laforet Hakone Gora，車程15分", icon: "hotel" }
      ]
    },
    {
      day: 3,
      date: "2/17 (一)",
      location: "靜岡一日遊",
      color: "orange",
      highlights: ["三保之松原", "清水魚市場", "日本平", "久能山東照宮"],
      transport: "VOXY + ALPHARD 自駕（8人）",
      schedule: [
        { time: "08:00", title: "箱根出發", desc: "走東名高速或新東名，車程1小時15分", icon: "car" },
        { time: "10:15", title: "三保之松原", desc: "看富士山絕景、走神之道松林步道、拍照打卡，停留1小時15分", icon: "camera" },
        { time: "11:30", title: "清水魚市場河岸之市午餐", desc: "鮪魚丼吃到飽、鮮魚海鮮定食，停留1小時30分，停車場免費", icon: "utensils" },
        { time: "13:05", title: "日本平夢陽台", desc: "360度展望台、梅花盛開、看富士山+駿河灣，停留45分", icon: "eye" },
        { time: "13:45", title: "纜車下山", desc: "15分車程", icon: "cable-car" },
        { time: "14:00", title: "久能山東照宮", desc: "德川家康陵墓、國寶級建築、拍團體照，停留1小時10分", icon: "torii-gate" },
        { time: "15:10", title: "纜車上山", desc: "15分車程", icon: "cable-car" },
        { time: "15:35", title: "往靜岡市區", desc: "車程25分", icon: "road" },
        { time: "16:00", title: "青葉黑輪街下午茶", desc: "靜岡黑輪、昭和懷舊小巷、20間黑輪小店，8人分組，停留1小時15分", icon: "utensils" },
        { time: "17:30", title: "結帳回停車場", desc: "步行返回", icon: "walking" },
        { time: "18:00", title: "出發返回箱根", desc: "車程1小時30分", icon: "car" },
        { time: "20:30", title: "抵達強羅度假村", desc: "湯之棲拉弗雷俱樂部，Check-in、泡湯休息", icon: "hotel" }
      ]
    },
    {
      day: 4,
      date: "2/18 (二)",
      location: "山梨河口湖一日遊",
      color: "teal",
      highlights: ["北口本宮冨士淺間神社", "精進湖", "河口湖", "富士山天丼"],
      transport: "VOXY (4人) + ALPHARD (4人) 自駕",
      schedule: [
        { time: "08:00", title: "強羅飯店出發", desc: "ALPHARD河口湖組、VOXY池袋組，車程1小時", icon: "car" },
        { time: "10:10", title: "北口本宮冨士淺間神社", desc: "日本最古老的淺間神社、看富士山、停車場免費(150台以上)，停留1小時", icon: "torii-gate" },
        { time: "11:15", title: "前往精進湖", desc: "車程約20分", icon: "road" },
        { time: "11:35", title: "精進湖", desc: "富士五湖中最小、看富士山倒影、停車場免費，停留30分鐘", icon: "water" },
        { time: "12:05", title: "往河口湖駅", desc: "車程約15分", icon: "road" },
        { time: "12:25", title: "冨士天ぷら いだ天午餐", desc: "招牌富士山天丼、人均¥2,000-3,000、無法預約現場排隊，停留1小時30分", icon: "utensils" },
        { time: "14:00", title: "河口湖駅周邊散策", desc: "5分徒步", icon: "walking" },
        { time: "14:10", title: "食パン専門店FUJISAN SHOKUPAN", desc: "富士山天然酵母食パン、營業至18:00、售完即止，停留20分", icon: "utensils" },
        { time: "14:30", title: "羅森便利商店", desc: "買紀念品、飲料，停留15分", icon: "shopping-bag" },
        { time: "14:45", title: "返回", desc: "河口湖組回住宿(14:45)、池袋組往東京(約2.5小時)", icon: "car" },
        { time: "18:00", title: "各自晚餐", desc: "河口湖組-河口湖餐廳、池袋組-池袋餐廳(自行安排)", icon: "utensils" }
      ]
    },
    {
      day: 5,
      date: "2/19 (三)",
      location: "高尾山+溫泉+燒肉",
      color: "cyan",
      highlights: ["高尾山", "京王高尾山溫泉極楽湯", "新宿和牛燒肉"],
      transport: "分組：河口湖組(ALPHARD)、池袋組(VOXY)",
      schedule: [
        { time: "08:00", title: "河口湖/池袋飯店早餐", desc: "各自飯店早餐、自由活動", icon: "utensils" },
        { time: "09:00", title: "河口湖/池袋散策", desc: "河口湖09:00-12:30、池袋09:00-11:30", icon: "walking" },
        { time: "12:30", title: "午餐", desc: "河口湖組(河口湖區)、池袋組(池袋區)12:30-12:00", icon: "utensils" },
        { time: "12:45", title: "出發往高尾山", desc: "河口湖組車程46分、池袋組車程1.5小時", icon: "car" },
        { time: "13:30", title: "高尾山口集合", desc: "8人全員集結，京王線高尾山口駅，停車場備妥", icon: "mountain" },
        { time: "13:30", title: "高尾山登山遊覽", desc: "看富士山景色、拍照打卡，停留2.5小時", icon: "hiking" },
        { time: "16:00", title: "開始下山", desc: "10分下山", icon: "walking" },
        { time: "16:10", title: "京王高尾山溫泉極楽湯", desc: "露天岩風呂、檜風呂、禁止刺青者進入", icon: "hot-tub-person" },
        { time: "16:15", title: "泡溫泉", desc: "平日¥1,100/人、假日¥1,300/人，泡湯1小時", icon: "hot-tub-person" },
        { time: "17:15", title: "往新宿出發", desc: "ALPHARD先Check-in，VOXY跟著走", icon: "car" },
        { time: "18:30", title: "和牛燒肉やくにく【徹】晚餐", desc: "新宿歌舞伎町，鹿児島黑牛和牛、全國和牛能力共進會冠軍、人均¥2,500-3,500、需預約Tel:03-5292-5545，用餐2小時", icon: "utensils" },
      ]
    },
    {
      day: 6,
      date: "2/20 (四)",
      location: "自由採購 & 還車返台",
      color: "indigo",
      highlights: ["自由購物", "租車還車", "返回機場"],
      transport: "VOXY + ALPHARD 還車",
      schedule: [
        { time: "全天", title: "自由採買", desc: "池袋區自由逛街購物", icon: "shopping-cart" },
        { time: "18:00前", title: "出發往還車點", desc: "加油站", icon: "car" },
        { time: "22:05", title: "樂桃航空MM627出發", desc: "東京NRT → 台北TPE，飛行時間3小時20分，請於20:00前抵達機場辦理登機", icon: "plane" }
      ]
    },
    
  ]
};
