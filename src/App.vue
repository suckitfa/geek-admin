<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:37:49
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 14:12:54
 * @FilePath: \geek-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:37:49
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 13:24:58
 * @FilePath: \geek-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import TodoList from './components/TodoList.vue'
// import ShowMouse from './components/ShowMouse.vue';
// import MyCounter from './components/MyCounter.vue'
// import MyFullScreen from './components/MyFullScreen.vue';
// import MyRate from './components/MyRate.vue';
import MyRate2 from './components/MyRate2.vue';
import MyBox from './components/MyBox.vue';
import MyTitile from './components/MyTitile.vue';
import DustBin from './components/DustBin.vue';
import MyCounterStore from './components/MyCounterStore.vue';
import {ref} from 'vue'
let score = ref(3.5)
function update(num) {
  score.value = num
}
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
    <TodoList ></TodoList>
    <DustBin></DustBin>
    <!-- <ShowMouse></ShowMouse> -->
    <!-- <MyCounter></MyCounter> -->
    <!-- <MyFullScreen></MyFullScreen> -->
    <!-- <MyRate :value="score"></MyRate> -->
    <!-- <MyRate :value="3" theme="red"></MyRate> -->
    <h3>Your score is : {{score}}</h3>
    <!-- <MyRate2 @update-rate="update" :value="score" theme="white"></MyRate2> -->
    <MyRate2 v-model="score" theme="red">
      课程评分：
    </MyRate2>

    <MyBox></MyBox>
    <MyTitile></MyTitile>
    <MyCounterStore></MyCounterStore>
    <router-view v-slot="{component}">
      <transition name="route" mode="out-in">
        <component :is="component"></component>
      </transition>
    </router-view>
  </main>
</template>


