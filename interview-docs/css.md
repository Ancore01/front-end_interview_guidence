# CSS 知识点

## 1. CSS 选择器优先级

- 内联样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器
- 计算规则：内联样式(1000)，ID选择器(100)，类选择器(10)，标签选择器(1)

## 2. CSS 盒模型

- 标准盒模型：内容(content) + 内边距(padding) + 边框(border) + 外边距(margin)
- IE盒模型：内容(content)包含内边距和边框
- 通过 `box-sizing` 属性切换：`content-box`(标准)，`border-box`(IE)

## 3. CSS 定位

- `static`：默认定位，遵循文档流
- `relative`：相对定位，相对于自身原位置偏移
- `absolute`：绝对定位，相对于最近的非static父元素定位
- `fixed`：固定定位，相对于视口定位
- `sticky`：粘性定位，结合了relative和fixed的特点

## 4. Flexbox 布局

- 一维布局模型，通过 `display: flex` 启用
- 主要属性：
  - `flex-direction`：主轴方向
  - `justify-content`：主轴对齐方式
  - `align-items`：交叉轴对齐方式
  - `flex-wrap`：是否换行
  - `flex`：子项的伸缩比例

## 5. Grid 布局

- 二维布局模型，通过 `display: grid` 启用
- 主要属性：
  - `grid-template-columns`：列定义
  - `grid-template-rows`：行定义
  - `grid-gap`：网格间距
  - `grid-area`：网格区域

## 6. CSS 预处理器

- Sass/SCSS：变量、嵌套、混合、继承等特性
- Less：类似Sass的功能
- Stylus：更灵活的语法

## 7. CSS 动画

- `transition`：过渡效果
- `animation`：关键帧动画
- `transform`：变换（旋转、缩放、平移等）

## 8. 响应式设计

- 媒体查询：`@media` 规则
- 弹性布局：Flexbox 和 Grid
- 相对单位：`rem`, `em`, `vw`, `vh` 等

## 9. CSS 性能优化

- 减少重排(reflow)和重绘(repaint)
- 使用 CSS 精灵图
- 避免使用 `!important`
- 减少选择器的复杂度
- 使用 CSS 变量提高可维护性