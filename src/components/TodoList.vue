<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:56:13
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 13:27:09
 * @FilePath: \geek-admin\src\components\TodoList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="todo-wrapper">
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <span class="dustbin">
            🗑
          </span>
      <div class="animate-wrap">
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
              <div class="animate" v-show="animate.show">
                  📋
              </div>
          </transition>
      </div>
        <ul v-if="todos.length">
            <transition-group name="flip-list" tag="ul">
                <li v-for="(todo,i) in todos" :key="todo.title">
                    <input type="checkbox" v-model="todo.done">
                    <span>{{todo.title}}</span>
                    <span class="remove-btn" @click="removeTodo($event,i)">
                        ❌
                    </span>
                </li>
            </transition-group>
        </ul>

        <transition name="modal">
            <div class="info-wrapper" v-if="showModal">
                <div class="info">哥，你啥也没输入</div>
            </div>
        </transition>
    </div>
</template>

<script setup>
// 。在 <script setup> 语法中，我们使用引入的 ref 函数包裹数字，
// 返回的 count 变量就是响应式的数据，使用 add 函数实现数字的修改。
// 需要注意的是，对于 ref 返回的响应式数据，我们需要修改 .value 才能生效，
// 而在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。

// import {ref,computed} from 'vue'
// 所以，我们需要使用 Composition API 的逻辑来拆分代码，把一个功能相关的数据和方法都维护在一起。
// let title = ref('')
// let todos = ref([{title:"学习Vue3", done:false}])
// function addTodo() {
//     todos.value.push({
//         title:title.value,
//         done:false,
//     })
//     title.value = "";
// }

// function clear() {
//     todos.value = todos.value.filter(v => !v.done)
// }

// let active = computed(() => {
//     return todos.value.filter(v => !v.done).length;
// })

// let all = computed(() => {
//     return todos.value.length
// })

// let allDone = computed({
//     get:function() {
//         return active.value === 0;
//     },
//     set: function(value) {
//         todos.value.forEach((todo) => {
//             todo.done = value;
//         })
//     }
// })

import useTodos from '../hooks/useTodos'
let {title,todos,addTodo,clear,active,all,allDone,showModal} = useTodos()
// 这样，组件就会解析成下面代码的样子。标签和样式的属性上，
// 新增了 data- 的前缀，确保只在当前组件生效。

// function removeTodo(e,i) {
//     console.log('removeTodo = ',e,i)
//     todos.value.splice(i,1)
// }

import {reactive} from 'vue'
let animate = reactive({
  show:false,
  el:null
})
function beforeEnter(el){
      let dom = animate.el
      let rect = dom.getBoundingClientRect()
      let x = window.innerWidth - rect.left - 60
      let y = rect.top - 10
      el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el,done){
      document.body.offsetHeight
      el.style.transform = `translate(0,0)`
      el.addEventListener('transitionend', done)
}
function afterEnter(el){
      animate.show = false
      el.style.display = 'none'
}
function removeTodo(e,i){
  animate.el = e.target
  animate.show = true
  todos.value.splice(i,1)
}
</script>

<style scoped>

    h1 {
        color:red;
    }
    .todo-wrapper {
        color: white;
    }

    .modal-enter-from {
        opacity: 0;
        transform: translateY(-60px);
    }

    .modal-enter-active {
        transition: all 0.3s ease;
    }

    .modeal-leave-to {
        opacity: 0;
        transition: translateY(-60px);
    }

    .modal-leave-active {
        transition: all 0.3s ease;
    }

    .info-wrapper {
        display: inline-block;
        padding: 1em;
        background: red;
        .info {
            color: white;
        }
    }

    .flip-list-move {
        transition: transform 0.8s ease;
    }

    .flip-list-enter-active,
    .flip-list-leave-active {
        transition: all 1s ease;
    }
    .flip-list-enter-from,
    .flip-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .animate-wrap .animate{
        position :fixed;
        right :10px;
        top :10px;
        z-index: 100;
        transition: all 0.5s linear;
    }
</style>