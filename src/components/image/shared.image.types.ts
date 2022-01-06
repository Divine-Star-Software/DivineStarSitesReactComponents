export type ImageCompData = {
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

export type ImageTypes = "default" | "post";

export type ImageSizes =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "hero"
  | "full";

export type ImageGalleryData = {
  gallery: {
    popup?: boolean;
    imageSize?: "small" | "medium" | "large";
    imageType?: "post" | "default";
  };
  images: ImageData[];
};
