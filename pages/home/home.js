// pages/home/home.js
import request from "../../utils/request";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    topList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let bannerListData = await request("/banner", { type: 2 });
    this.setData({
      bannerList: bannerListData.banners,
    });
    let recommendMusic = await request("/personalized");
    this.setData({
      recommendList: recommendMusic.result,
    });

    //
    let index = 0;
    let topListArr = [];
    while (index < 5) {
      let topListData = await request("/top/list", { idx: index++ });
      // splice 会修改原数组，slice不会修改原数组
      let topListItem = {
        name: topListData.playlist.name,
        tracks: topListData.playlist.tracks.slice(0, 3),
      };
      topListArr.push(topListItem);
      this.setData({
        topList: topListArr,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
