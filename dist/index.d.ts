/// <reference types="react" />
import { FC } from 'react';

interface ButtonProps {
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

declare const Button: FC<ButtonProps>;

declare type FancyButtonProps = {
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

declare const FancyButton: FC<FancyButtonProps>;

export { Button, FancyButton };
