<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:37:49
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-18 15:08:21
 * @FilePath: \geek-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import TodoList from './components/TodoList.vue'
import ShowMouse from './components/ShowMouse.vue';
import MyCounter from './components/MyCounter.vue'
import MyFullScreen from './components/MyFullScreen.vue';
import MyRate from './components/MyRate.vue';
import MyRate2 from './components/MyRate2.vue';

import {ref} from 'vue'
let score = ref(3)
</script>

<template>
  <header>
    <div class="wrapper">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </header>

  <main class="main">
    <!-- <router-view></router-view> -->
    <TodoList />
    <ShowMouse></ShowMouse>
    <MyCounter></MyCounter>
    <MyFullScreen></MyFullScreen>
    <MyRate :value="score"></MyRate>
    <MyRate :value="3" theme="red"></MyRate>
    <MyRate2 :value="3.5" theme="green"></MyRate2>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
