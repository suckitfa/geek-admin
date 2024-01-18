<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 13:19:59
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-18 13:20:06
 * @FilePath: \geek-admin\src\components\MyCounter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <h1 @click="add">{{ count }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  let count = ref(1)
  let color = ref('red')
  function add() {
    count.value++
    color.value = Math.random()>0.5? "blue":"red"
  }

//   在 style 内部，我们使用 v-bind 函数绑定 color 的值，
// 就可以动态地通过 JavaScript 的变量实现 CSS 的样式修改，点
// 击累加器的时候文本颜色会随机切换为红或者蓝。
  </script>
  
  <style scoped>
  h1 {
    color:v-bind(color);
  }
  </style>>