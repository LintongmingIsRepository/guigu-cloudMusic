//发送ajax请求
/* 
1.封装功能函数
    功能点明确
    内部保留固定代码 静态
    动态的抽取成参数  使用者根据自身情况动态的传入实参
    一个良好的功能函数应该设置形参的默认值（ES6的形参默认值）
2.封装功能组件
    功能点明确
    组件内部保留静态代码
    将动态的数据抽取成props参数 以标签的形式动态的传入props数据
    一个良好的组件应该设置组件的必要性以及数据类型
    props:{
        msg:{
            require：true
            default：默认值
            type：String
        }
    }
*/
import config from "../utils/config";
export default (url, data = {}, methods = "GET") => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      methods,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
