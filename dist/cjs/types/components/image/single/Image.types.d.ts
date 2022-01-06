import { ImageCompData } from "../shared.image.types";
export declare type ImageProps = {
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
