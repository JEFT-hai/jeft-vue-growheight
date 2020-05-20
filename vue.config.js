/*
 * @Author: your name
 * @Date: 2020-05-20 11:06:09
 * @LastEditTime: 2020-05-20 11:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\vue.config.js
 */ 
module.exports = {
    // 将 examples 目录添加为新的页面
    pages: {
      index: {
        // page 的入口
        entry: 'examples/main.js',
        // 模板来源
        template: 'public/index.html',
        // 输出文件名
        filename: 'index.html'
      }
    },
    css: {
      extract: true
    }
  }