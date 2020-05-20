<!--
 * @Author: your name
 * @Date: 2020-05-20 10:51:33
 * @LastEditTime: 2020-05-20 11:11:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\examples\App.vue
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="这是自增高输入框"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
