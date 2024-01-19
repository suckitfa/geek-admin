<template>
    <div class="box" :style="{width:width+'px'}"></div>
    <div class="box1"></div>
    <button @click="change">click</button>
    <button @click="reduce">reduce</button>
</template>

<script setup>
import {ref} from 'vue'
let width = ref(100)
function change() {
    width.value += 100
}

function reduce() {
    width.value -= 100
}
// 我们可以通过 transition 来控制一个元素的属性的值，缓慢地变成另外一个值，
// 这种操作就称之为过渡。除了 transition，我们还可以通过 animation 
// 和 keyframe 的组合实现动画。

// 增加动画
// 动画和过渡可以增加用户体验的舒适度，让变化更加自然，并且可以吸引用户的注意力，突出重点。
// transition 和 animation 让我们可以用非常简单的方式实现动画。

</script>

<style scoped>
.box {
    background: red;
    height: 100px;
    transition: width 1s linear;
}

.box1 {
    width: 30px;
    height: 30px;
    position: relative;
    background: #d88986;
    animation: move 2s linear infinite;
}
@keyframes move {
    0% {left:0px}
    50% {left: 200px;}
    100%{left: 0;}
}
</style>