import React from "react";
import { Story, Meta } from "@storybook/react";

import { Image } from "./Image";
import { ImageProps } from "./Image.types";

export default {
  title: "Images/Thumbnails",
  component: Image,
  argTypes: {},
} as Meta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

const defaultColors = {
  borderColor: "rgb(17, 54, 97)",
};

const imageSrc = "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg";

//default
export const DefaultThumbnail = Template.bind({});
DefaultThumbnail.args = {
  src: imageSrc,
  webP: true,
  thumb : true
} as ImageProps;

export const PostThumbnail = Template.bind({});
PostThumbnail.args = {
  src: imageSrc,
  webP: true,
  thumb : true,
  type : "post",
  colors : defaultColors
} as ImageProps;


