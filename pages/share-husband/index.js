// pages/share/index.js
const { $Message } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  eventGetImage: function (event) {
    console.log(event);
    this.setData({
      imageUrl: event.detail.tempFilePath
    })
  },
  
  saveCanvasImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imageUrl,
      success: function (res) {
        console.log('success', res);
        $Message({
          content: '保存成功，已保存到手机相册',
          type: 'success'
        });
      },
      fail: function (res) {
        console.log('fail', res);
      }
    })
  },

  drawImage(acodeUrl) {
    var width = 375;
    var height = 555;

    var acodeWidth = 100;
    var acodeHeight = 100;
    var acodeTop = height - acodeHeight - 20;
    var acodeLeft = width - acodeWidth - 20;

    var lineHeight = 40;
    var lineLeft = 10;
    var lineSize = 20;
    var lineTop = 60;

    this.setData({
      painting: {
        width: width,
        height: height,
        views: [
          {
            type: 'rect',
            background: '#FFFFFF',
            top: 0,
            left: 0,
            width: width,
            height: height
          },
          {
            type: 'text',
            content: "老公生成器",
            fontSize: 24,
            textAlign: 'center',
            top: 10,
            left: 187
          },
          {
            type: 'text',
            content: "身高: "+this.data.height,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop,
            left: lineLeft
          },
          {
            type: 'text',
            content: "体重: " + this.data.weight,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight,
            left: lineLeft
          },
          {
            type: 'text',
            content: "腹肌: " + this.data.fujinum,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 2,
            left: lineLeft
          },
          {
            type: 'text',
            content: "SIZE: " + this.data.size,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 3,
            left: lineLeft
          },
          {
            type: 'text',
            content: "TIME: " + this.data.staytime,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 4,
            left: lineLeft
          },
          {
            type: 'text',
            content: "肤色: " + this.data.skin,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 5,
            left: lineLeft
          },
          {
            type: 'text',
            content: "发型: " + this.data.hair,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 6,
            left: lineLeft
          },
          {
            type: 'rect',
            background: this.data.hairColor,
            top: lineTop + lineHeight * 7,
            left: lineLeft + 50,
            width: 100,
            height: 30
          },
          {
            type: 'text',
            content: "发色: " + this.data.hairColor,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 7,
            left: lineLeft
          },
          {
            type: 'rect',
            background: this.data.eyes,
            top: lineTop + lineHeight * 8,
            left: lineLeft + 50,
            width: 100,
            height: 30
          },
          {
            type: 'text',
            content: "瞳色: " + this.data.eyes,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 8,
            left: lineLeft
          },
          {
            type: 'text',
            content: "属性: " + this.data.attribute,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 9,
            left: lineLeft
          },
          {
            type: 'text',
            content: "性格: " + this.data.character,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 10,
            left: lineLeft
          },
          {
            type: 'text',
            content: "超能力: " + this.data.superPower,
            fontSize: lineSize,
            textAlign: 'left',
            top: lineTop + lineHeight * 11,
            left: lineLeft
          },
          {
            type: 'image',
            url: acodeUrl,
            top: acodeTop,
            left: acodeLeft,
            width: acodeWidth,
            height: acodeHeight
          }
        ]
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: options.height,
      weight: options.weight,
      hair: options.hair,
      hairColor: options.hairColor,
      eyes: options.eyes,
      attribute: options.attribute,
      character: options.character,
      skin: options.skin,
      fujinum: options.fujinum,
      staytime: options.staytime,
      superPower: options.superPower,
      size: options.size,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var acode_tempFileUrl = '../../images/ai_code.jpg';
    that.drawImage(acode_tempFileUrl);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    return {
      path: '/pages/home/index'
    }
  }
})