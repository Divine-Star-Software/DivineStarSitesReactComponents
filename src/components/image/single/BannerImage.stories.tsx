import React from "react";
import { Story, Meta } from "@storybook/react";

import { Image } from "./Image";
import { ImageProps } from "./Image.types";

export default {
  title: "Images/Banner",
  component: Image,
  argTypes: {},
} as Meta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

const defaultColors = {
  borderColor: "rgb(17, 54, 97)",
};

const imageSrc = "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg";

export const BannerDefault = Template.bind({});
BannerDefault.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  colors: defaultColors,
} as ImageProps;

export const PostBannerDefault = Template.bind({});
PostBannerDefault.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  type: "post",
  colors: defaultColors,
} as ImageProps;

export const BannerXSmall = Template.bind({});
BannerXSmall.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "xsmall",
  colors: defaultColors,
} as ImageProps;

export const BannerSmall = Template.bind({});
BannerSmall.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "small",
  colors: defaultColors,
} as ImageProps;

export const BannerMedium = Template.bind({});
BannerMedium.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "medium",
  colors: defaultColors,
} as ImageProps;

export const BannerLarge = Template.bind({});
BannerLarge.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "large",
  colors: defaultColors,
} as ImageProps;

export const BannerXLarge = Template.bind({});
BannerXLarge.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "xlarge",
  colors: defaultColors,
} as ImageProps;

export const BannerHero = Template.bind({});
BannerHero.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "hero",
  colors: defaultColors,
} as ImageProps;

export const BannerFull = Template.bind({});
BannerFull.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "full",
  colors: defaultColors,
} as ImageProps;


//Post Banner
export const PostBannerXSmall = Template.bind({});
PostBannerXSmall.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "xsmall",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerSmall = Template.bind({});
PostBannerSmall.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "small",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerMedium = Template.bind({});
PostBannerMedium.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "medium",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerLarge = Template.bind({});
PostBannerLarge.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "large",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerXLarge = Template.bind({});
PostBannerXLarge.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "xlarge",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerHero = Template.bind({});
PostBannerHero.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "hero",
  type : "post",
  colors: defaultColors,
} as ImageProps;

export const PostBannerFull = Template.bind({});
PostBannerFull.args = {
  src: imageSrc,
  webP: true,
  banner: true,
  size: "full",
  type : "post",
  colors: defaultColors,
} as ImageProps;
