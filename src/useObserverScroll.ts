import { useEffect } from "react";

/**
 * 监听滚动条事件
 * @param callback
 * @param deps
 * @param target
 */
export function useObserverScroll(callback: (event: UIEvent) => void, deps: any[], target?: () => HTMLElement) {
    useEffect(() => {
        const ele = target ? target() : window;
        if (ele) {
            ele.addEventListener("scroll", callback);
        }
        window.addEventListener("resize", callback);
        return () => {
            if (ele) {
                ele.removeEventListener("scroll", callback);
            }
            window.removeEventListener("resize", callback);
        };
    }, deps);
}
