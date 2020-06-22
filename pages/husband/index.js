// pages/home/index.js
const data = require('../../utils/data-husband.js');
const PI = Math.PI;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canShare: false
  },

  startGenerator: function () {
    var height = this.generateHeight();
    this.setData({
      height: height,
      weight: this.generateWeight(height),
      hair: this.generateHair(),
      hairColor: this.generateHairColor(),
      eyes: this.generateEyes(),
      fujinum: this.enerateFujinum(),
      staytime: this.generateStaytime(),
      size: this.generateSize(),
      attribute: this.generateAttribute(),
      character: this.generateCharacter(),
      superPower: this.generateSuperPower(),
      skin: this.generateSkin(),
      canShare: true
    })
    
  },

  generateCup: function () {
    return this.randomData(data.Cupsize_data);
  },

  generateSize: function () {
    var jier = this.normalDistribution(16, 5)
    jier = Math.round(jier);
    return jier;
  },

  generateSkin: function () {
    return this.randomData(data.Skin_data);
  },

  generateHeight: function () {
    var height = this.normalDistribution(165, 5)
    height = Math.round(height);
    return height;
  },
  generateWeight: function (height) {
    var bmi = this.normalDistribution(20, 1);
    var weight = Math.round(bmi * (height / 100) * (height / 100));
    return weight;
  },
  generateAge: function () {
    var gH = Math.round(normalDistribution(20, 2));
    return gH;
  },
  generateHair: function () {
    return this.randomData(data.Hair_data);
  },
  generateHairColor: function () {
    var newColor = this.randomRGB();
    return newColor;
  },
  generateEyes: function () {
    var newColor = this.randomRGB();
    return newColor;
  },
  generateAttribute: function () {
    return this.randomData(data.Attribute_data);
  },
  generateCharacter: function () {
    return this.randomData(data.Character_data);
  },
  enerateFujinum: function () {
    return this.randomData(data.fujinum_data);
  },

  generateStaytime: function () {
    return this.randomData(data.staytime_data);
  },

  generateSuperPower: function () {
    return this.randomData(data.Superpower_data);
  },

  normalDistribution: function (u, v) {
    // Box-Muller
    var x1 = Math.random();
    var x2 = Math.random();
    var nD = Math.sqrt(-2 * Math.log(x1)) * Math.sin(2 * PI * x2) * v + u;
    return nD;
  },
  randomRGB: function() {
    var rValue = Math.round(Math.random() * 255).toString(16);
    var gValue = Math.round(Math.random() * 255).toString(16);
    var bValue = Math.round(Math.random() * 255).toString(16);
    if (rValue.length < 2)
      rValue = "0" + rValue;
    if (gValue.length < 2)
      gValue = "0" + gValue;
    if (bValue.length < 2)
      bValue = "0" + bValue;
    return "#" + rValue + gValue + bValue;
  },
  randomData: function (dataName) {
    var t1Num = Math.floor(Math.random() * dataName.length);
    return dataName[t1Num];
  },
  insertExWife: function (cellCount) {
    let exWivesTable = document.getElementById("exWivesTable");
    let row = exWivesTable.insertRow(1);
    let wifeTable = document.getElementById("wifeTable");
    for (let i = 0; i <= cellCount; i++) {
      let cell = row.insertCell(i);
      cell.innerHTML = wifeTable.rows[i].cells[1].innerHTML;
    };
  },
  updateCounterText: function () {
    let t = document.getElementById("wifeTable");
    t.caption.innerHTML = t.caption.innerHTML.replace(/\d+/, wifeCounter);
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
  },

  shareImage: function() {
    wx.navigateTo({
      url: '../share-husband/index?height=' + this.data.height + '&weight=' + this.data.weight + '&hair=' + this.data.hair + '&hairColor=' + this.data.hairColor + '&eyes=' + this.data.eyes + '&attribute=' + this.data.attribute + '&character=' + this.data.character + '&fujinum=' + this.data.fujinum + '&staytime=' + this.data.staytime + '&superPower=' + this.data.superPower + '&size=' + this.data.size + '&skin=' + this.data.skin
    })
  }
})