import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const defaultColors = {
  color: "rgb(21, 72, 131)",
  colorOnHover: "rgba(10, 10, 10, 0.8)",
  bgColor: "rgba(10, 10, 10, 0.8)",
  bgColorOnHover: "rgb(21, 72, 131)",
  borderColor: "rgb(17, 54, 97)",
  borderColorOnHover: "rgba(10, 10, 10, 0.8)",
  boxShadowColor: "rgba(1, 1, 1, 0.5)",
  boxShadowColorOnHover: "rgb(4, 27, 54)",
};

export const Small = Template.bind({});
Small.args = {
  nav: true,
  navLink: "https://www.google.com",
  navToNewTab: false,
  center: true,
  size: "small",
  children: "Small",
  colors: defaultColors,
} as ButtonProps;

export const Medium = Template.bind({});
Medium.args = {
  center: true,
  size: "medium",
  children: "Medium",
  colors: defaultColors,
} as ButtonProps;

export const Large = Template.bind({});
Large.args = {
  center: true,
  size: "large",
  children: "Large",
  colors: defaultColors,
} as ButtonProps;
