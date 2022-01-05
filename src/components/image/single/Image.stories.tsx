import React from "react";
import { Story, Meta } from "@storybook/react";

import { Image } from "./Image";
import { ImageProps } from "./Image.types";

export default {
  title: "Images/Single",
  component: Image,
  argTypes: {},
} as Meta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

const defaultColors = {
  borderColor: "rgb(17, 54, 97)",
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "small",
} as ImageProps;

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "medium",
} as ImageProps;

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "large",
} as ImageProps;

export const PostSmall = Template.bind({});
PostSmall.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "small",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostMedium = Template.bind({});
PostMedium.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "medium",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostLarge = Template.bind({});
PostLarge.args = {
  src: "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg",
  webP: true,
  size: "large",
  type: "post",
  colors: defaultColors,
} as ImageProps;
