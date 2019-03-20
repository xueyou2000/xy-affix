import React, { useEffect, useState, useRef } from "react";
import { AffixProps } from "./interface";
import classNames from "classnames";
import { getViewportSize } from "./utils";

const useWindowResize = (callback: (event: UIEvent) => void, deps: any[]) => {
    useEffect(() => {
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    }, deps);
};

function useObserverScroll(callback: (event: UIEvent, down: boolean) => void, deps: any[], target?: () => HTMLElement) {
    const lastScroll = useRef(window.pageYOffset);
    useEffect(() => {
        const ele = target ? target() : window;
        function handleScroll(event: UIEvent) {
            callback(event, !(lastScroll.current > window.pageYOffset));
            lastScroll.current = window.pageYOffset;
        }
        if (ele) {
            ele.addEventListener("scroll", handleScroll);
        }
        return () => {
            ele.removeEventListener("scroll", handleScroll);
        };
    }, deps);
}

const PlacementTop = "top";

export function Affix(props: AffixProps) {
    const { prefixCls = "xy-affix", className, style, placement = PlacementTop, offset = 0, onChange, target, children } = props;
    const [fixed, setFixed] = useState(false);
    const ref = useRef();
    const obEle = ref.current as HTMLElement;
    const size = obEle ? { width: obEle.clientWidth, height: obEle.clientHeight } : {};
    const rawSizeStyle: React.CSSProperties = fixed ? size : {};
    const fixedStyle = useRef<React.CSSProperties>({});
    const classString = classNames(prefixCls, className, `${prefixCls}-fixed`);

    function toSetFixed(_fixed: boolean) {
        if (_fixed === fixed) {
            return;
        }
        if (_fixed) {
            fixedStyle.current = { position: "fixed", ...size };
            fixedStyle.current[placement] = `${offset}px`;
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
        if (!element) {
            return;
        }

        const rect = element.getBoundingClientRect();
        const [, viewportHeight] = getViewportSize();

        console.log(rect);

        if (placement === PlacementTop) {
            toSetFixed(rect.top - offset <= 0);
        } else {
            toSetFixed(rect.bottom + offset >= viewportHeight);
        }
    }

    useWindowResize(adjustFixed, [fixed]);
    useObserverScroll(adjustFixed, [fixed], target);

    return (
        <div style={rawSizeStyle} ref={ref}>
            <div className={classString} style={Object.assign({}, fixedStyle.current, style)}>
                {children}
            </div>
        </div>
    );
}

export default React.memo(Affix);
