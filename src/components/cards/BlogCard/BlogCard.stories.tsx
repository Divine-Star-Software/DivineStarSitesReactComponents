import React, { Fragment } from "react";
import { Story, Meta } from "@storybook/react";

import { BlogCard } from "./BlogCard";
import { BlogCardProps } from "./BlogCard.types";

export default {
  title: "Cards/BlogCard",
  component: BlogCard,
  argTypes: {},
} as Meta<typeof BlogCard>;

const Template: Story<BlogCardProps> = (args) => <BlogCard {...args} />;

import { FancyButton } from "../../buttons/fancy/FancyButton";
const defaultColors = {
  titleColor: "white",
  descriptionColor: "white",
  dateColor: "white",
  titleBorderColor : "rgba(7, 23, 43, 0.8)",
  outLineColor : "rgb(17, 54, 97)",
  boxShadowOnHoverColor : "rgb(4, 27, 54)"

};

const imageSrc = "https://portfolio.lucasdamianjohnson.dev/images/voxel.jpg";
const imageAlt = "Divine Voxel Engine";
//default
export const DefaultBlogCard = Template.bind({});
DefaultBlogCard.args = {
  title: "Blog Post",
  date: "12-01-2022",
  link: "/",
  description: "This is a blog post.",
  image: {
    src: imageSrc,
    alt: imageAlt,
  },
  colors: defaultColors,
} as BlogCardProps;
