## 笔记
### App.vue
- 代码中的 router-link 和 router-view 就是由 vue-router 注册的全局组件，router-link 负责跳转不同的页面，相当于 Vue 世界中的超链接 a 标签； router-view 负责渲染路由匹配的组件，我们可以通过把 router-view 放在不同的地方，实现复杂项目的页面布局

- 在重构的过程中，你能逐渐明白，Composition API 可以让我们更好地组织代码结构，而让你感到好奇的 <script setup> 本质上是以一种更精简的方式来书写 Composition API 。