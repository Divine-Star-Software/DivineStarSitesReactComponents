import { ImageCompData } from "../shared.image.types";
export declare type ImageProps = {
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
