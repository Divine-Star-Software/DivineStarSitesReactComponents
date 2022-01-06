import React, { Fragment } from "react";
import { Story, Meta } from "@storybook/react";

import { Grid } from "./Grid";
import { GridProps } from "./Grid.types";

export default {
  title: "Structural/Grid",
  component: Grid,
  argTypes: {},
} as Meta<typeof Grid>;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

import { FancyButton } from "../../buttons/fancy/FancyButton";
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
//default
export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
  mobileBreak : true,
  children: (
    <Fragment>
      <div>
        <FancyButton colors={defaultColors} center>1</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>2</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>3</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>4</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>5</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>6</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>7</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>8</FancyButton>
      </div>
      <div>
        <FancyButton colors={defaultColors} center>9</FancyButton>
      </div>
    </Fragment>
  ),
} as GridProps;
