/*
 * @Author: your name
 * @Date: 2020-05-20 10:54:54
 * @LastEditTime: 2020-05-20 11:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\packages\growHeight\index.js
 */ 
import autoTextarea from './assets/textarea'
/** 
 * DIRECTIVE
*/
const GrowHeight = {}
GrowHeight.install = function (Vue) {
    Vue.directive('growHeight', {
        componentUpdated: function (el, binding) {
          const grow = el.getAttribute('data-grow')
          if (grow === 'false') {
            autoTextarea(el, binding.value)
            el.setAttribute('data-grow', 'true')
          }
        },
        inserted: function (el) {
          el.setAttribute('data-grow', 'false')
        }
    })
}

export default GrowHeight
