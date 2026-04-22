# Vue 知识点

## 1. Vue 核心概念

- 响应式数据：数据变化自动更新视图
- 组件化：将页面拆分为可复用的组件
- 指令：`v-bind`, `v-model`, `v-if`, `v-for` 等
- 生命周期钩子：`created`, `mounted`, `updated`, `destroyed` 等

## 2. Vue 生命周期

- 初始化阶段：`beforeCreate`, `created`
- 挂载阶段：`beforeMount`, `mounted`
- 更新阶段：`beforeUpdate`, `updated`
- 销毁阶段：`beforeDestroy`, `destroyed`

## 3. Vue 组件通信

- 父组件向子组件：props
- 子组件向父组件：$emit 事件
- 兄弟组件：EventBus 或 Vuex
- 跨组件：provide/inject 或 Vuex

## 4. Vue 路由

- 路由配置：定义路由规则
- 路由导航：`<router-link>` 或 `this.$router.push()`
- 路由参数：动态路由、查询参数
- 路由守卫：全局守卫、路由守卫、组件守卫

## 5. Vuex 状态管理

- State：存储状态
- Getters：计算属性
- Mutations：修改状态（同步）
- Actions：异步操作
- Modules：模块化管理

## 6. Vue 指令

- `v-bind`：绑定属性
- `v-model`：双向数据绑定
- `v-if`：条件渲染
- `v-for`：列表渲染
- `v-on`：事件监听
- `v-show`：条件显示
- `v-pre`：跳过编译
- `v-cloak`：防止闪烁

## 7. Vue 计算属性与侦听器

- 计算属性：基于响应式数据计算，缓存结果
- 侦听器：监听数据变化，执行副作用操作

## 8. Vue 过渡与动画

- 过渡类名：`v-enter`, `v-enter-active`, `v-enter-to`, `v-leave`, `v-leave-active`, `v-leave-to`
- 自定义过渡：使用 `<transition>` 组件
- 列表过渡：使用 `<transition-group>` 组件

## 9. Vue 3 新特性

- Composition API：基于函数的 API
- 响应式系统重构：使用 Proxy
- 生命周期钩子变化
- 多根节点组件
- 更好的 TypeScript 支持

## 10. Vue 性能优化

- 合理使用 v-if 和 v-show
- 使用 key 优化列表渲染
- 计算属性缓存
- 异步组件
- 虚拟滚动
- 代码分割