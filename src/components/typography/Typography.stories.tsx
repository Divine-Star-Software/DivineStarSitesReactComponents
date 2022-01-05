import React from "react";
import { Story, Meta } from "@storybook/react";

import { Typography } from "./Typography";
import { TypographyProps } from "./Typography.types";

export default {
  title: "Typography/Default",
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
  color: "white",
  type: "h1",
  children: "Hello",
} as TypographyProps;

export const H2 = Template.bind({});
H2.args = {
  color: "white",
  type: "h2",
  children: "Hello",
} as TypographyProps;

export const H3 = Template.bind({});
H3.args = {
  color: "white",
  type: "h3",
  children: "Hello",
} as TypographyProps;

export const H4 = Template.bind({});
H4.args = {
  color: "white",
  type: "h4",
  children: "Hello",
} as TypographyProps;

export const H5 = Template.bind({});
H5.args = {
  color: "white",
  type: "h5",
  children: "Hello",
} as TypographyProps;

export const H6 = Template.bind({});
H6.args = {
  color: "white",
  type: "h6",
  children: "Hello",
} as TypographyProps;

export const Span = Template.bind({});
Span.args = {
  color: "white",
  type: "span",
  children: "Hello",
} as TypographyProps;

export const Paragraph = Template.bind({});
Paragraph.args = {
  color: "white",
  type: "p",
  children: "Hello",
} as TypographyProps;
