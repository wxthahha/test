<!--
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-04-23 13:48:58
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-04-23 14:37:18
 * @Description: ts枚举类型 enum
-->
## 枚举enum
更像js中声明的constants文件下的变量们。
优点：
1、得到更好的类型提示；
2、常量被真正约束到一个命名空间下。
如果没有声明枚举的值，会默认从0开始，以1递增。

### 数字型枚举中可以使用延迟枚举。
如果在数字枚举中使用了延迟枚举，没有使用延迟枚举的成员必须放到使用常量枚举声明的成员之后或者第一位。