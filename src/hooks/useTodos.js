/*
 * @Author: GuangyuanTang 254202042@qq.com
 * @Date: 2024-01-18 11:12:18
 * @LastEditors: GuangyuanTang 254202042@qq.com
 * @LastEditTime: 2024-01-19 08:57:31
 */
// 所以，我们需要使用 Composition API 的逻辑来拆分代码，
// 把一个功能相关的数据和方法都维护在一起。

// 我们在使用 Composition API 拆分功能时，也就是执行 useTodos 的时候，
// ref、computed 等功能都是从 Vue 中单独引入，而不是依赖 this 上下文。
// 其实你可以把组件内部的任何一段代码，从组件文件里抽离出一个独立的文件进行维护。
import {ref,computed} from 'vue'
import useStorage from './useStorage';
function useTodos() {
    let title = ref("");
    let todos = useStorage('todos')
    let showModal = ref(false)

    function addTodo() {
      if(!title.value) {
        showModal.value = true
        setTimeout(() => {
          showModal.value = false
        },1500)
        return
      }
      todos.value.push({
        title: title.value,
        done: false,
      });
      title.value = "";
    }
    function clear() {
      todos.value = todos.value.filter((v) => !v.done);
    }
    let active = computed(() => {
      return todos.value.filter((v) => !v.done).length;
    });
    let all = computed(() => todos.value.length);
    let allDone = computed({
      get: function () {
        return active.value === 0;
      },
      set: function (value) {
        todos.value.forEach((todo) => {
          todo.done = value;
        });
      },
    });

    return { title,showModal, todos, addTodo, clear, active, all, allDone };
  }

  export default useTodos