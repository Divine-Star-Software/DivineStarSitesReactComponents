/// <reference types="react" />
import { FC } from 'react';

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

declare type ImageCompData = {
    src: string;
    webP?: boolean;
    size?: ImageSizes;
    type?: ImageTypes;
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
declare type ImageTypes = "default" | "post";
declare type ImageSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "hero" | "full";

declare type ImageProps = {
    /**## clickAble
     * ---
     * If set the image will have css style to indicate that
     * it is clickable and provide access to onClick funciton.
     */
    clickAble?: boolean;
    /**## openInNewTabOnClick
     * ---
     * If set the image will open in a new tba if clicked.
     *
     * **Must be first set to clickAble.**
     */
    openInNewTabOnClick?: boolean;
    src?: string;
    alt?: string;
    /**## type
     * ---
     * The sets the type for css styling for the image.
     * The default type is just 'default' or not set. This will load the image no additional style other than to make it responsive.
     * If set to post it will add a border and a box shadow to the image.
     */
    type?: "default" | "post";
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "hero" | "full";
    maxWidth?: number;
    center?: boolean;
    /**## banner
     * ---
     * If this is set the image will be bigger and will have access to different sizes using the size parameter.
     */
    banner?: boolean;
    className?: string;
    containerClassName?: string;
    data?: ImageCompData;
    /**## webP
     * ---
     * If this is set a source set and picture element will created for webP image suppourt.
     * The images url will be auto processed to create the webP link and provide the original image
     * as a fallback.
     */
    webP?: boolean;
    /**## Thumb
     * ---
     * If set the url of the image will be have '-thumb' appened to the end.
     * This is used to load different sized versions of the same image.
     */
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

interface ImageGalleryProps {
    popup?: boolean;
    className?: string;
    imageSize?: ImageSizes;
    imageType?: ImageTypes;
    images: ImageCompData[];
    thumb?: boolean;
    webP?: boolean;
    colors?: {
        borderColor?: string;
    };
}

declare const ImageGallery: (props: ImageGalleryProps) => JSX.Element;

interface GridProps {
    collumnWidth?: string;
    rowHeight?: string;
    collumnGap?: string;
    /**## Mobdile Break
     * ---
     * If screen width is below 600px and this is set
     * the elements will break downward with by setting the display to block.
     * Otherwise it will set the display to flex.
     */
    mobileBreak?: boolean;
    collumns?: {
        small?: number;
        medium?: number;
        large?: number;
    };
    children: JSX.Element | JSX.Element[] | string;
}

declare const Grid: (props: GridProps) => JSX.Element;

export { Button, FancyButton, Grid, Image, ImageGallery, Typography };
