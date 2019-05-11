| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-affix.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-affix.svg?style=flat-square)

[![xy-affix](https://nodei.co/npm/xy-affix.png)](https://npmjs.org/package/xy-affix)

# xy-affix

图钉组件, 固定某个元素。

## 特性

-   [x] 支持上下 2 个方向的固定
-   [x] 支持`auto`自动固定, 让元素始终保持固定在可视区域内
-   [x] offset 偏移量指定

## 安装

```bash
# yarn
yarn add xy-affix utils-dom classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Affix from "xy-affix";
ReactDOM.render(
    <Affix offset={10}>
        <button>被固定的按钮</button>
    </Affix>,
    container,
);
```

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## API

### 按钮

| 属性      | 说明                                                                 | 类型                     | 默认值        |
| --------- | -------------------------------------------------------------------- | ------------------------ | ------------- |
| placement | 固定方向                                                             | "top", "bottom", "auto"  | "auto"        |
| offset    | 偏移量, 离窗口侧达到指定偏移量后触发                                 | number                   | -             |
| fixed     | 是否启用固定                                                         | boolean                  | true          |
| target    | 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement        | () => windows |
| onChange  | 固定状态改变回调                                                     | (fixed: boolean) => void | -             |

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
