export interface AffixProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 固定放置方向
     */
    placement?: "top" | "bottom" | "auto";
    /**
     * 是否启用固定
     * @description 默认true
     */
    fixed?: boolean;
    /**
     * 偏移量
     * @description 距离窗口侧达到指定偏移量后触发
     */
    offset?: number;
    /**
     * 包裹的元素
     */
    children?: React.ReactNode;
    /**
     * 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
     * @description 默认监听window滚动事件
     */
    target?: () => HTMLElement;
    /**
     * 改变回调
     */
    onChange?: (fixed: boolean) => void;
}
