/// <reference types="react" />
export declare type FancyButtonProps = {
    className?: string;
    children: JSX.Element | string;
    center?: boolean;
    nav?: boolean;
    navToNewTab?: boolean;
    navLink?: string;
    disabled?: boolean;
    width?: number;
    height?: number;
    animating?: boolean;
    onClick?: Function;
    fancy?: boolean;
    colors?: {
        strokeColor?: string;
        strokeColorOnHover?: string;
        color?: string;
        colorOnHover?: string;
        bgColor?: string;
        bgColorOnHover?: string;
        borderColor?: string;
        borderColorOnHover?: string;
        boxShadowColor?: string;
        boxShadowColorOnHover?: string;
    };
    type?: "default" | "1" | "2";
};
