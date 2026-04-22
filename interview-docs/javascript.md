# JavaScript 知识点

## 1. 数据类型

- 基本数据类型：`Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- 引用数据类型：`Object`（包括 `Array`, `Function`, `Date` 等）
- 类型判断：`typeof`, `instanceof`, `Object.prototype.toString.call()`

## 2. 作用域

- 全局作用域
- 函数作用域
- 块级作用域（ES6+）：`let`, `const` 声明的变量

## 3. 闭包

- 定义：函数能够访问其外部作用域的变量
- 应用：模块化、私有变量、柯里化等
- 注意：可能导致内存泄漏

## 4. this 指向

- 全局上下文：指向 `window`（浏览器）或 `global`（Node.js）
- 函数调用：指向调用函数的对象
- 构造函数：指向新创建的实例
- `apply`, `call`, `bind`：改变 `this` 指向
- 箭头函数：继承外层作用域的 `this`

## 5. 原型与原型链

- 原型：每个函数都有 `prototype` 属性
- 原型链：对象通过 `__proto__` 指向其原型，形成链式结构
- 继承：基于原型链实现

## 6. 异步编程

- 回调函数
- Promise
- async/await
- 事件循环（Event Loop）

## 7. ES6+ 新特性

- 箭头函数
- 解构赋值
- 模板字符串
- 扩展运算符
- 模块化（`import`, `export`）
- 类（`class`）
- 生成器（`function*`）
- Set 和 Map 数据结构

## 8. 数组方法

- 遍历：`forEach`, `map`, `filter`, `reduce`, `some`, `every`
- 操作：`push`, `pop`, `shift`, `unshift`, `splice`, `slice`
- 其他：`join`, `concat`, `indexOf`, `includes`

## 9. 防抖与节流

- 防抖：多次触发，只执行最后一次
- 节流：一段时间内只执行一次
- 应用场景：搜索输入、滚动事件等

## 10. 深拷贝与浅拷贝

- 浅拷贝：复制引用，修改会影响原对象
- 深拷贝：复制值，修改不会影响原对象
- 实现方式：`JSON.parse(JSON.stringify())`, 递归拷贝等