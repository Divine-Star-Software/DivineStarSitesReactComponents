export type ImageCompData = {
    src : string;
    webP ?: boolean;
    size ?: "small" | "medium" | "large";
    type ?: "post" | "default"; 
    alt?: string;
    class ?: string;
    center ?: boolean;
    width?: string | number;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
  };

export type ImageGalleryData = {
      gallery : {
        popup?: boolean;
        imageSize?: "small" | "medium" | "large";
        imageType?: "post" | "default";
      },
      images : ImageData[]

}