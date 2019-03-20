# xy-affix

---

> 图钉组件, 固定某个元素

-   [x] 支持上下 2 个方向的固定
-   [x] offset 偏移量指定

## 安装

```sh
# npm
npm install --save xy-affix

# yarn
yarn add xy-affix
```

## 使用

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Affix from "xy-affix";
ReactDOM.render(
    <Affix>
        <button>被固定的按钮</button>
    </Affix>,
    container
);
```

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-affix is released under the MIT license.
