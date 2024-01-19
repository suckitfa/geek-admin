<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 10:56:13
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 09:01:50
 * @FilePath: \geek-admin\src\components\TodoList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="todo-wrapper">
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <ul v-if="todos.length">
            <li v-for="todo in todos" :key="todo.title">
                <input type="checkbox" v-model="todo.done">
                <span>{{todo.title}}</span>
            </li>
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
</style>