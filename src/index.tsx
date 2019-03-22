import classNames from "classnames";
import React, { useRef, useState } from "react";
import { AffixProps } from "./interface";
import { useObserverScroll } from "./useObserverScroll";
import { getScrollY, getTagrt, getViewportSize, isWindow } from "./utils";

export const PlacementTop = "top";

export function Affix(props: AffixProps) {
    const { prefixCls = "xy-affix", className, style, placement = PlacementTop, offset = 0, onChange, children } = props;
    const [fixed, setFixed] = useState(false);
    const ref = useRef();
    const fixedStyle = useRef<React.CSSProperties>({});
    const obEle = ref.current as HTMLElement;
    const size = obEle ? { width: obEle.clientWidth, height: obEle.clientHeight } : {};
    const rawSizeStyle: React.CSSProperties = fixed ? size : {};
    const classString = classNames(prefixCls, className, `${prefixCls}-fixed`);

    function toSetFixed(_fixed: boolean, _placement: string, iswindow: boolean = false, extOffset: number = 0) {
        if (_fixed === fixed) {
            return;
        }
        if (_fixed) {
            fixedStyle.current = { position: "fixed", ...size };
            fixedStyle.current[iswindow ? _placement : "top"] = `${extOffset || offset}px`;
        } else {
            fixedStyle.current = {};
        }

        setFixed(_fixed);
        if (onChange) {
            onChange(_fixed);
        }
    }

    function adjustFixed() {
        const element = ref.current as HTMLElement;
        const target = getTagrt(props.target);
        if (!element || !target) {
            return;
        }

        const iswindow = isWindow(target);
        const rect = element.getBoundingClientRect();

        if (iswindow) {
            const [, viewportHeight] = getViewportSize();
            let _placement = placement === "auto" ? (rect.top >= viewportHeight / 2 ? "bottom" : "top") : placement;

            if (_placement === PlacementTop) {
                toSetFixed(rect.top - offset <= 0, _placement, true);
            } else {
                toSetFixed(rect.bottom + offset >= viewportHeight, _placement, true);
            }
        } else {
            if (placement === PlacementTop) {
                toSetFixed(getScrollY(target) + offset >= element.offsetTop, placement, false, rect.top);
            } else {
                toSetFixed(element.offsetTop + offset >= target.clientHeight + getScrollY(target) - rect.height, placement, false, rect.top);
            }
        }
    }

    useObserverScroll(adjustFixed, [fixed], props.target);

    return (
        <div style={rawSizeStyle} ref={ref}>
            <div className={classString} style={Object.assign({}, fixedStyle.current, style)}>
                {children}
            </div>
        </div>
    );
}

export default React.memo(Affix);
