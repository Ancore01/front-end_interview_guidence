# 浏览器 知识点 dd

## 1. 浏览器渲染过程

1. HTML 解析：构建 DOM 树
2. CSS 解析：构建 CSSOM 树
3. 渲染树构建：结合 DOM 树和 CSSOM 树
4. 布局（Layout）：计算元素位置和大小
5. 绘制（Paint）：将元素绘制到屏幕上
6. 合成（Composite）：将绘制的图层合并

## 2. 重排与重绘

-   重排（Reflow）：布局发生变化，需要重新计算元素位置和大小
-   重绘（Repaint）：元素样式发生变化，但布局不变
-   优化：减少重排和重绘，使用 CSS 变换代替布局操作

## 3. 浏览器缓存

-   强缓存：`Expires`, `Cache-Control`
-   协商缓存：`Last-Modified`, `ETag`
-   缓存策略：根据资源类型设置不同的缓存策略

## 4. 同源策略

-   定义：协议、域名、端口都相同
-   限制：阻止不同源的页面访问彼此的资源
-   跨域解决方案：CORS, JSONP, 代理服务器等

## 5. Cookie、SessionStorage 和 LocalStorage

-   Cookie：用于会话管理，大小限制 4KB，会随请求发送
-   SessionStorage：会话存储，关闭标签页后清除
-   LocalStorage：本地存储，持久化，大小限制约 5MB

## 6. 浏览器安全

-   XSS（跨站脚本攻击）：注入恶意脚本
-   CSRF（跨站请求伪造）：利用用户身份执行未授权操作
-   防范措施：输入验证、输出编码、使用 CSP 等

## 7. 性能优化

-   减少 HTTP 请求
-   使用 CDN
-   压缩资源
-   合理使用缓存
-   优化 DOM 操作
-   使用 Web Workers 处理耗时任务

## 8. 浏览器事件

-   事件冒泡：从目标元素向上传播
-   事件捕获：从根元素向下传播
-   事件委托：利用事件冒泡，将事件处理委托给父元素
-   阻止事件默认行为：`event.preventDefault()`
-   阻止事件传播：`event.stopPropagation()`
