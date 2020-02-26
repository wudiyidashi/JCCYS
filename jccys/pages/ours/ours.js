// pages/ours/ours.js
let WxParse = require("../../lib/wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections: [{
      id: 1,
      title: "轮播图",
      type: 0, // 板块类型 轮播
      sortOrder: 1, // 板块排序
      list: [{
        id: 1,
        relateId: 0, // 关联商品或其他ID
        title: "",
		
        type: 0, // 关联类型 0商品 1促销板块 2分类
        picUrl: "https://s2.ax1x.com/2020/02/11/17pmw9.jpg"
      }, {
        id: 2,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/w/white25wap.png"
      }, {
        id: 3,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/9402b4117bf1c1754dca08b52c98cca0.png"
      }, {
        id: 4,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/B/BS2000WAP.png"
      }]
    },
       {
        id: 2,
        title: "最新活动",
        type: 2, // 大图商品带边框板块
        relateId: 2,
        sortOrder: 2,
        list: [{
          id: 1,
          relateId: 0,
          title: "恭喜石大成功举办电脑维修活动",
          description: "欢迎大家加入团队核心群",
          price: "2020-12-12",
          type: 0,
          picUrl: "../../assets/IMG_1680.jpg",
          tag: "满减"
        },
        {
          id: 2,
          relateId: 0,
          title: "我们在伊犁大学成功举办电竞活动",
          description: "哑光表面、专业级调音",
          price: "2020-15-12",
          type: 0,
          picUrl: "../../assets/新疆农业大学6e136d9f89fa1253.jpg"
        }
        ]
    }],
    sections2: [{
      id: 1,
      title: "轮播图",
      type: 0, // 板块类型 轮播
      sortOrder: 1, // 板块排序
      list: [{
        id: 1,
        relateId: 0, // 关联商品或其他ID
        title: "",

        type: 0, // 关联类型 0商品 1促销板块 2分类
        picUrl: "https://s2.ax1x.com/2020/02/11/17pmw9.jpg"
      }, {
        id: 2,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/w/white25wap.png"
      }, {
        id: 3,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/9402b4117bf1c1754dca08b52c98cca0.png"
      }, {
        id: 4,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/B/BS2000WAP.png"
      }]
    },
    {
      id: 2,
      title: "最新活动",
      type: 2, // 大图商品带边框板块
      relateId: 2,
      sortOrder: 2,
      list: [{
        id: 1,
        relateId: 0,
        title: "恭喜石大成功举办电脑维修活动",
        description: "欢迎大家加入团队核心群",
        price: "2020-12-12",
        type: 0,
        picUrl: "../../assets/IMG_1680.jpg",
        tag: "满减"
      },
      {
        id: 2,
        relateId: 0,
        title: "我们在伊犁大学成功举办电竞活动",
        description: "欢迎大家加入我们",
        price: "2020-15-12",
        type: 0,
        picUrl: "../../assets/新疆农业大学6e136d9f89fa1253.jpg"
        },
        {
          id: 3,
          relateId: 0,
          title: "我们在伊犁大学成功举办电竞活动",
          description: "欢迎大家加入我们",
          price: "2020-15-12",
          type: 0,
          picUrl: "../../assets/新疆农业大学6e136d9f89fa1253.jpg"
        },
        {
          id: 4,
          relateId: 0,
          title: "我们在伊犁大学成功举办电竞活动",
          description: "欢迎大家加入我们",
          price: "2020-15-12",
          type: 0,
          picUrl: "../../assets/新疆农业大学6e136d9f89fa1253.jpg"
        },
        {
          id: 5,
          relateId: 0,
          title: "我们在伊犁大学成功举办电竞活动",
          description: "欢迎大家加入我们",
          price: "2020-15-12",
          type: 0,
          picUrl: "../../assets/新疆农业大学6e136d9f89fa1253.jpg"
        }
      ]
    }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
	
	var detail = '<div><img src="https://s2.ax1x.com/2020/02/11/17pmw9.jpg"></div>';
    var detail2 = '<div><img src="../../assets/bar2.png"></div>';
	
    let that = this;
    WxParse.wxParse('detail', 'html', detail, that, 0);
    WxParse.wxParse('detail2', 'html', detail2, that, 0);
	
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})