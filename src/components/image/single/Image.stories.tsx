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

const imageSrc = "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg";

//default
export const DefaultXSmall = Template.bind({});
DefaultXSmall.args = {
  src: imageSrc,
  webP: true,
  size: "xsmall",
} as ImageProps;

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  src: imageSrc,
  webP: true,
  size: "small",
} as ImageProps;

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
  src: imageSrc,
  webP: true,
  size: "medium",
} as ImageProps;

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  src: imageSrc,
  webP: true,
  size: "large",
} as ImageProps;

export const DefaultXLarge = Template.bind({});
DefaultXLarge.args = {
  src: imageSrc,
  webP: true,
  size: "xlarge",
} as ImageProps;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  src: imageSrc,
  webP: true,
  size: "hero",
} as ImageProps;

export const DefaultFull = Template.bind({});
DefaultFull.args = {
  src: imageSrc,
  webP: true,
  size: "full",
} as ImageProps;

//post image
export const PostXSmall = Template.bind({});
PostXSmall.args = {
  src: imageSrc,
  webP: true,
  size: "xsmall",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostSmall = Template.bind({});
PostSmall.args = {
  src: imageSrc,
  webP: true,
  size: "small",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostMedium = Template.bind({});
PostMedium.args = {
  src: imageSrc,
  webP: true,
  size: "medium",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostLarge = Template.bind({});
PostLarge.args = {
  src: imageSrc,
  webP: true,
  size: "large",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostXLarge = Template.bind({});
PostXLarge.args = {
  src: imageSrc,
  webP: true,
  size: "xlarge",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostHero = Template.bind({});
PostHero.args = {
  src: imageSrc,
  webP: true,
  size: "hero",
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const PostFull = Template.bind({});
PostFull.args = {
  src: imageSrc,
  webP: true,
  size: "full",
  type: "post",
  colors: defaultColors,
} as ImageProps;
