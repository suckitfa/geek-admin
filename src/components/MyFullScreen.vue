<!--
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 14:12:46
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-18 14:12:58
 * @FilePath: \geek-admin\src\components\MyFullScreen.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import {useFullscreen} from '@vueuse/core'
const {isFullscreen, enter, exit, toggle} = useFullscreen()
</script>
<template>
    <h1 @click="toggle">click</h1>
</template>