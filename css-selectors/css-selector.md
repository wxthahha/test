## 精通 CSS 选择符

---

### CSS 后代选择器

**_对 js 中的后代选择符可能错误的认识_**
**_CSS 选择符是全局的。_**

```
  document
  .querySelector("#myId")
  .querySelectorAll("div div");
```

翻译过来的意思是：查询 #myId 元素下所有符合 div div 选择符条件的 DOM 元素。

示例如下：

```
  <div id="myId">
    <div class="lonely"></div>
    <div class="outer">
      <div class="inner"></div>
    </div>
  </div>
  <script>
    const nodeList = document
      .querySelector("#myId")
      .querySelectorAll("div div");
    console.log(nodeList.length); // 答案？？
  </script>
```

### 子选择符（>）

主要的目的是 **避免冲突**。
子选择符能不用尽量不用，锁死了层级关系。
适合使用子选择符的几个场景：

- 状态类名控制。
- 标签受限。后代中多层嵌套同类标签时。
- 层级位置与动态判断。

### 相邻兄弟选择符（+）

相邻兄弟元素，但只能选择后面一个兄弟。  
**_文本节点、注释节点不会被相邻兄弟选择符选中，只认元素节点。_**
可以用来实现 :first-child 的效果。

```
  <style>
    .cs-cg1 .cs-li:not(:first-child) {
      color: skyblue;
    }
    .cs-cg2 .cs-li + .cs-li {
      color: skyblue;
    }
  </style>
  <div class="cs-cg1>
    <h4>下面啥颜色？？</h4>
    <li class="cs-li">111111</li>
    <li class="cs-li">222222</li>
    <li class="cs-li">333333</li>
  </div>
  <div class="cs-cg2>
    <h4>下面啥颜色？？</h4>
    <li class="cs-li">111111</li>
    <li class="cs-li">222222</li>
    <li class="cs-li">333333</li>
  </div>
```

### 随后兄弟选择符（～）

同样也会忽视**文本节点**以及**注释节点**。

> 为什么没有前面兄弟选择符或者父级选择符？

这两个原因是一致的，受制于 DOM 的渲染机制。浏览器解析 HTML 文档都是从前往后、从外往里进行，所以我们经常能看到先出现头部再出现主体内容的情况。

- flex 布局适合多元素、块级元素，但是有兼容性问题；
- direction 属性适合多元素、内联元素，无兼容性问题。

### 列选择符双管道（||）
