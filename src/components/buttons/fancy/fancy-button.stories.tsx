import React from "react";
import { Story, Meta } from "@storybook/react";

import { FancyButton } from "./FancyButton";
import { FancyButtonProps } from "./FancyButton.types";

export default {
  title: "Buttons/FancyButton",
  component: FancyButton,
  argTypes: {},
} as Meta<typeof FancyButton>;

const Template: Story<FancyButtonProps> = (args) => <FancyButton {...args} />;

const defaultColors = {
  color: "rgb(21, 72, 131)",
  colorOnHover: "rgba(36, 238, 252, 0.849)",
  bgColor: "rgba(10, 10, 10, 0.8)",
  bgColorOnHover: "rgb(21, 72, 131)",
  boxShadowColor: "rgba(1, 1, 1, 0.5)",
  boxShadowColorOnHover: "rgb(4, 27, 54)",
  strokeColor : 'rgb(54, 129, 214)',
  strokeColorOnHover : 'rgba(36, 238, 252, 0.849)'
  
};

export const Type1 = Template.bind({});
Type1.args = {
  center: true,
  children: "Type 1",
  colors: defaultColors,
} as FancyButtonProps;

