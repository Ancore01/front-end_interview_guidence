# 代码 知识点得到

## 1. 数据结构与算法

-   数组：增删改查操作
-   链表：单链表、双链表
-   栈：后进先出（LIFO）
-   队列：先进先出（FIFO）
-   树：二叉树、二叉搜索树、平衡树
-   图：邻接矩阵、邻接表
-   排序算法：冒泡排序、选择排序、插入排序、归并排序、快速排序
-   查找算法：线性查找、二分查找

## 2. 设计模式

-   单例模式：保证一个类只有一个实例
-   工厂模式：创建对象的接口
-   观察者模式：发布-订阅模式
-   装饰器模式：动态添加功能
-   适配器模式：接口转换
-   策略模式：算法选择
-   责任链模式：请求处理链

## 3. 代码优化

-   时间复杂度：分析算法执行时间
-   空间复杂度：分析算法空间使用
-   代码可读性：命名规范、注释
-   代码可维护性：模块化、解耦
-   代码安全性：防止 XSS、SQL 注入等

## 4. 常见编程问题

-   数组去重
-   深拷贝
-   防抖与节流
-   Promise 封装
-   事件委托
-   函数柯里化
-   数组扁平化
-   字符串操作

## 5. 代码示例

### 数组去重

```javascript
// ES6 Set 方法
function unique(arr) {
	return [...new Set(arr)]
}

// 双层循环
function unique(arr) {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		let flag = true
		for (let j = 0; j < result.length; j++) {
			if (arr[i] === result[j]) {
				flag = false
				break
			}
		}
		if (flag) {
			result.push(arr[i])
		}
	}
	return result
}
```

### 深拷贝

```javascript
function deepClone(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}
	if (obj instanceof Date) {
		return new Date(obj.getTime())
	}
	if (obj instanceof Array) {
		return obj.map((item) => deepClone(item))
	}
	if (typeof obj === 'object') {
		const clonedObj = {}
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				clonedObj[key] = deepClone(obj[key])
			}
		}
		return clonedObj
	}
}
```

### 防抖

```javascript
function debounce(func, wait) {
	let timeout
	return function () {
		const context = this
		const args = arguments
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			func.apply(context, args)
		}, wait)
	}
}
```

### 节流

```javascript
function throttle(func, wait) {
	let lastTime = 0
	return function () {
		const now = Date.now()
		if (now - lastTime >= wait) {
			func.apply(this, arguments)
			lastTime = now
		}
	}
}
```

### Promise 封装

```javascript
function ajax(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url)
		xhr.onload = function () {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText))
			} else {
				reject(new Error(xhr.statusText))
			}
		}
		xhr.onerror = function () {
			reject(new Error('Network error'))
		}
		xhr.send()
	})
}
```
