<!--
 * @Author: your name
 * @Date: 2020-05-20 10:51:42
 * @LastEditTime: 2020-05-20 11:47:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-plugin\jeft-vue-growheight\README.md
--> 
# jeft-vue-growheight

## Installation

``` js
npm install jeft-vue-growheight --save
```

## Usage

``` html
<textarea
    class="textarea"
    v-model="content"
    v-grow-height="0"
    :placeholder="msg"
/>
```

## Tip

- 必须使用v-model才能动态改变高度：就是要触发componentUpdated
- 自增高的高度为line-height的值
- binding.value为额外增加的高度
