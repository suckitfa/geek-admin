<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 14:58:10
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 08:36:32
 * @FilePath: \geek-admin\src\components\MyRate2.vue
-->
<template>
    <div :style="fontstyle">
        <slot></slot>
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import {defineProps,ref,computed} from 'vue'
let props = defineProps({
    // value:Number,
    modelValue:Number,
    theme:{type:String,default:"orange"}
})
// let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = {
    'black': '#00',
     'white': '#fff',
     'red': '#f5222d',
     'orange': '#fa541c',
     'yellow': '#fadb14',
     'green': '#73d13d',
     'blue': '#40a9ff',

}
const fontstyle = computed(() => {
    return `color:${themeObj[props.theme]}`
})

let width = ref(props.modelValue)
function mouseOver(i) {
    width.value = i
}
function mouseOut() {
    width.value = props.modelValue
}
const fontwidth = computed(() => `width:${width.value}em;`)

// let emits = defineEmits('update-rate')
let emits = defineEmits('update:modelValue')
function onRate(num){ 
    // emits('update-rate',num)
    emits('update:modelValue',num)
}
</script>

<style scoped>
.rate {
    position: relative;
    display: inline-block;
}

.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    overflow: hidden;
}
</style>

<!-- 
    https://time.geekbang.org/column/article/435439
 -->