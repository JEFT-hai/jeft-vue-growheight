/*
 * @Author: your name
 * @Date: 2020-05-20 10:51:33
 * @LastEditTime: 2020-05-20 11:37:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\examples\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
// import growHeight from '../packages/growHeight'

Vue.config.productionTip = false
// import autoTextarea from '../packages/growHeight/assets/textarea'

// Vue.directive('growHeight', {
//   componentUpdated: function (el, binding) {
//     console.log('componentUpdated')
//     const grow = el.getAttribute('data-grow')
//     if (grow === 'false') {
//       autoTextarea(el, binding.value)
//       el.setAttribute('data-grow', 'true')
//     }
//   },
//   inserted: function (el) {
//     console.log('inserted')
//     el.setAttribute('data-grow', 'false')
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
