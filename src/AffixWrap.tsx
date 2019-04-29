import React, { useRef, useState } from "react";

/**
 * 固定包裹组件
 * @description 如果element是原生组件, 则直接返回, 否则包裹一层div去监听事件
 * @param element
 */
export function AffixWrap(element: React.ReactNode, ref: React.MutableRefObject<any>) {
    const node = React.Children.only(element) as any;

    // node.type 是字符串, 则认为原生标签, 如果是构造函数, 则认定是自定义组件
    if (typeof node.type === "string") {
        return React.cloneElement(node, { ref });
    } else {
        return <div ref={ref}>{element}</div>;
    }
}
