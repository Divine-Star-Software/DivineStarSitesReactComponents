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

declare type TypographyElementTypes = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
declare type TypographyProps = {
    children: JSX.Element | JSX.Element[] | string;
    type?: TypographyElementTypes;
    className?: string;
    center?: boolean;
    color?: string;
    align?: "left" | "right";
};

declare const Typography: FC<TypographyProps>;

declare type ImageCompData = {
    src: string;
    webP?: boolean;
    size?: "small" | "medium" | "large";
    type?: "post" | "default";
    alt?: string;
    class?: string;
    center?: boolean;
    width?: string | number;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
};

declare type ImageProps = {
    clickAble?: boolean;
    openInNewTabOnClick?: boolean;
    src?: string;
    alt?: string;
    type?: string;
    size?: string;
    center?: boolean;
    className?: string;
    containerClassName?: string;
    data?: ImageCompData;
    webP?: boolean;
    thumb?: boolean;
    colors?: {
        borderColor?: string;
    };
};

/**# Image
 * ---
 * Custom image used for static site rendering.
 * Suppourts souce sets for webp images.
 */
declare const Image: FC<ImageProps>;

export { Button, FancyButton, Image, Typography };
