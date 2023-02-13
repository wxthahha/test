
# CSS如何根据背景色深浅切换文字颜色？
## 示例：css-luma.html

> js计算公式：luma = ( r * 0.2126 + g * 0.7152 + b * 0.0722 ) / 255

> css属性filter：grayscale + contrast + invert

> 利用css属性计算
> > 文字颜色变色的临界值，建议0.5~0.6
> > 深色边框出现的临界值，范围0~1，推荐0.8+

> js给css传入变量值 style="--num: 1" css中：var(--num)

> > 通过clamp(Min,Val,Max)来实现范围控制

# CSS新特性：CSS嵌套规则

## 示例：css-nesting.html