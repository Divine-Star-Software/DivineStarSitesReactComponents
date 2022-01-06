export declare type ImageCompData = {
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
export declare type ImageTypes = "default" | "post";
export declare type ImageSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "hero" | "full";
export declare type ImageGalleryData = {
    gallery: {
        popup?: boolean;
        imageSize?: "small" | "medium" | "large";
        imageType?: "post" | "default";
    };
    images: ImageData[];
};
