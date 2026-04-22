# HTML 知识点

## 1. HTML5 新特性

- 语义化标签：`header`, `nav`, `section`, `article`, `aside`, `footer`
- 表单新元素：`input` 的新类型（email, tel, url, number, date等）
- 本地存储：`localStorage`, `sessionStorage`
- Canvas 和 SVG
- 音视频元素：`audio`, `video`
- Web Workers
- WebSockets
- Geolocation

## 2. DOCTYPE 的作用

- 声明文档类型，告诉浏览器使用哪个 HTML 版本的规范来解析页面
- HTML5 的 DOCTYPE 为 `<!DOCTYPE html>`，简化了之前的声明方式

## 3. 语义化标签的好处

- 提高代码可读性
- 有利于SEO
- 方便屏幕阅读器等辅助技术
- 使代码结构更清晰

## 4. meta 标签的作用

- 描述文档的元数据，如字符集、视口设置、页面描述等
- 示例：
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="前端面试指南">
  ```

## 5. HTML 表单验证

- 内置验证：`required`, `pattern`, `min`, `max` 等属性
- 自定义验证：使用 JavaScript 实现复杂验证逻辑
- 验证API：`checkValidity()`, `setCustomValidity()` 等方法