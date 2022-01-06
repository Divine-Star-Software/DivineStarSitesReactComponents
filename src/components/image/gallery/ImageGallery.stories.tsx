import React from "react";
import { Story, Meta } from "@storybook/react";

import { ImageGallery } from "./ImageGallery";
import { ImageGalleryProps } from "./ImageGallery.types";
import { ImageCompData } from "../shared.image.types";

export default {
  title: "Images/Gallery",
  component: ImageGallery,
  argTypes: {},
} as Meta<typeof ImageGallery>;

const Template: Story<ImageGalleryProps> = (args) => <ImageGallery {...args} />;

const defaultColors = {
  borderColor: "rgb(17, 54, 97)",
};

const imageSrc = "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg";
const imageAlt = "Divine Voxel Engine";

const images: ImageCompData[] = [
  {
    src: imageSrc,
    alt: imageAlt,
  },
  {
    src: imageSrc,
    alt: imageAlt,
  },
  {
    src: imageSrc,
    alt: imageAlt,
  },
  {
    src: imageSrc,
    alt: imageAlt,
  },
  {
    src: imageSrc,
    alt: imageAlt,
  },
  {
    src: imageSrc,
    alt: imageAlt,
  },
];

//default
export const DefaultImageGallery = Template.bind({});
DefaultImageGallery.args = {
  images: images,
  colors : defaultColors
};

export const SmallDefaultImageGallery = Template.bind({});
SmallDefaultImageGallery.args = {
  images: images,
  imageSize : 'small',
  colors : defaultColors
};

export const LargeDefaultImageGallery = Template.bind({});
LargeDefaultImageGallery.args = {
  images: images,
  imageSize : 'large',
  colors : defaultColors
};

export const PostImageGallery = Template.bind({});
PostImageGallery.args = {
  images: images,
  colors : defaultColors,
  imageType : "post"
};

export const SmallPostImageGallery = Template.bind({});
SmallPostImageGallery.args = {
  images: images,
  colors : defaultColors,
  imageSize : 'small',
  imageType : "post"
};

export const LargePostImageGallery = Template.bind({});
LargePostImageGallery.args = {
  images: images,
  colors : defaultColors,
  imageSize : 'large',
  imageType : "post"
};



