/**
 * 获取元素滚动条Y的距离
 * @description 封装了对window和普通元素的处理
 * @param w
 */
export function getScrollY(w: any): number {
    if ("pageYOffset" in w) {
        return w.pageYOffset;
    } else {
        return w.scrollTop;
    }
}

/**
 * 获取目标元素
 * @param target
 */
export function getTagrt(target: any): HTMLElement {
    return target ? target() : (window as any);
}
