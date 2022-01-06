import { ImageCompData } from "../../image/shared.image.types";

export interface BlogCardProps  {
    title: string;
    date?: string;
    link: string;
    small ?:boolean;
    description: string;
    subTitleElement?: JSX.Element;
    wrap ?: ()=>JSX.Element;
    colors ?: {
        titleColor ?: string;
        descriptionColor ?: string;
        dateColor ?: string;
        titleBorderColor ?: string;
        outLineColor ?: string;
        boxShadowOnHoverColor ?: string;
    }

    center ?: boolean;


    image?: ImageCompData;
    thumb ?: boolean;
    webP ?: boolean;
  };
  