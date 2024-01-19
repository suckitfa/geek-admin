/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 14:06:28
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 14:15:54
 * @FilePath: \geek-admin\src\hooks\useStorage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {ref, watchEffect} from 'vue'
function useStorage(name,value = '[]') {
    let data = ref(JSON.parse(localStorage.getItem(name) || value))
    watchEffect(() => {
        localStorage.setItem(name,JSON.stringify(data.value))
    })

    return data
}

export default useStorage;