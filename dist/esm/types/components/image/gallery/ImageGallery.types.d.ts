import { ImageCompData, ImageSizes, ImageTypes } from "../shared.image.types";
export interface ImageGalleryProps {
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
