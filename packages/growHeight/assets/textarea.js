/*
 * @Author: your name
 * @Date: 2020-05-20 10:55:23
 * @LastEditTime: 2020-05-20 11:21:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\packages\growHeight\assets\textarea.js
 */ 
/**
                * 文本框根据输入内容自适应高度
                * @param {HTMLElement} 输入框元素
                * @param {Number} 设置光标与输入框保持的距离(默认0)
                * @param {Number} 设置最大高度(可选)
                */

export default function (elem, extra, maxHeight) {
  extra = extra || 0
  var isFirefox
  isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window
  var isOpera
  isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera')
  var addEvent
  addEvent = function (type, callback) {
    elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type, callback)
  }
  var getStyle
  getStyle = elem.currentStyle ? function (name) {
    var val = elem.currentStyle[name]
    if (name === 'height' && val.search(/px/i) !== 1) {
      var rect = elem.getBoundingClientRect()
      return rect.bottom - rect.top -
        parseFloat(getStyle('paddingTop')) -
        parseFloat(getStyle('paddingBottom')) + 'px'
    }
    return val
  } : function (name) {
    return getComputedStyle(elem, null)[name]
  }
  var minHeight
  minHeight = parseFloat(getStyle('height'))

  elem.style.resize = 'none'

  var change = function () {
    console.log('input')
    var scrollTop
    var height
    var padding = 0
    var style = elem.style
    if (elem._length === elem.value.length) return
    elem._length = elem.value.length

    if (!isFirefox && !isOpera) {
      padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'))
    }
    scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    elem.style.height = minHeight + 'px'
    if (elem.scrollHeight > minHeight) {
      if (maxHeight && elem.scrollHeight > maxHeight) {
        height = maxHeight - padding
        style.overflowY = 'auto'
      } else {
        height = elem.scrollHeight - padding
        style.overflowY = 'hidden'
      }
      style.height = height + extra + 'px'
      scrollTop += parseInt(style.height) - elem.currHeight
      document.body.scrollTop = scrollTop
      document.documentElement.scrollTop = scrollTop
      elem.currHeight = parseInt(style.height)
    }
  }
  addEvent('propertychange', change)
  addEvent('input', change)
  addEvent('focus', change)
  change()
}
