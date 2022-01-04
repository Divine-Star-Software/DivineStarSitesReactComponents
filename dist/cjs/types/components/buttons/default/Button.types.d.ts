/// <reference types="react" />
export interface ButtonProps {
    className?: string;
    children: JSX.Element | string;
    center?: boolean;
    nav?: boolean;
    navToNewTab?: boolean;
    navLink?: string;
    disabled?: boolean;
    size?: string;
    onClick?: Function;
    fancy?: boolean;
    colors?: {
        color?: string;
        colorOnHover?: string;
        bgColor?: string;
        bgColorOnHover?: string;
        borderColor?: string;
        borderColorOnHover?: string;
        boxShadowColor?: string;
        boxShadowColorOnHover?: string;
    };
}
