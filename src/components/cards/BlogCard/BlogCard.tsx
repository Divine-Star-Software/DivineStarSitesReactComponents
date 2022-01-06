import styled from "styled-components";
import React from "react";
import { Image } from "../../image/single/Image";
import { Typography } from "../../..";
import { BlogCardProps } from "./BlogCard.types";

const BlogCardDiv = styled.div<{ colors: any; center?: boolean }>`
  background-color: rgba(10, 10, 10, 0.3);
  position: relative;
  margin-top: 25px;
  margin-bottom: 5px;
  max-width: 500px;

  overflow: hidden;

  margin-left: ${(props) => {
    if (props.center) {
      return `auto`;
    }
    return "inital";
  }};

  margin-right: ${(props) => {
    if (props.center) {
      return `auto`;
    }
    return "inital";
  }};

  box-shadow: 0px 5px 5px 2px rgba(1, 1, 1, 0.5);

  outline: 0px solid var(--primary);
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: linear;

  &:hover .blog-card-image {
    opacity: 1;
    transition: 0.5s opacity linear;
  }

  &:hover {
    outline: 1px solid var(--primary);

    border-bottom: ${(props) => {
      if (props.colors?.outLineColor) {
        let color = props.colors?.outLineColor;
        return `1px solid ${color}`;
      }

      return "1px solid var(--primary)";
    }};

    background-color: rgba(10, 10, 10, 0.8);
    box-shadow: 0px 0px 25px 5px
      ${(props) => {
        if (props.colors?.boxShadowOnHoverColor) {
          let color = props.colors?.boxShadowOnHoverColor;
          return `${color}`;
        }

        return "var(--primary-alt-2)";
      }};

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: linear;
  }
`;
const BlogCardImageDiv = styled.div`
  & .blog-card-image {
    display: block;
    margin: auto;
    opacity: 0.8;
    transition: 0.5s opacity linear;
  }

  object-fit: cover;
`;
const BlogCardContentdDiv = styled.div<{ colors: any }>`
  top: 0;
  left: 0;
  padding: 5px;
  & .blog-card-title {
    border-bottom: ${(props) => {
      if (props.colors?.titleBorderColor) {
        let color = props.colors?.titleBorderColor;
        return `solid 3px ${color}`;
      }

      return "none";
    }};

    font-weight: 1000;
    line-height: 25px;
    font-size: 18px;
    margin-bottom: 0;
    margin-top: 0;
  }

  & .blog-card-description {
    font-weight: 100;
    font-size: 14px;
  }

  & .blog-card-date {
    margin-top: -10px;
    font-size: 10px;
  }
`;

export const BlogCard = (props: BlogCardProps) => {
  let image = { src: "" };
  if (props.image) {
    image = props.image;
  }

  return (
    <BlogCardDiv colors={props.colors} center={props.center}>
      {image && (
        <BlogCardImageDiv>
          <Image
            maxWidth={500}
            className="blog-card-image"
            webP={props.webP}
            thumb={props.thumb}
            src={image.src}
            data={image}
          />
        </BlogCardImageDiv>
      )}
      <BlogCardContentdDiv colors={props.colors}>
        <Typography
          color={props.colors?.titleColor}
          className="blog-card-title"
          type="h3"
        >
          {props.title}
        </Typography>
        {props.subTitleElement && props.subTitleElement}

        {props.date && (
          <Typography
            color={props.colors?.dateColor}
            className="blog-card-date"
            type="span"
          >
            {props.date}
          </Typography>
        )}
        <Typography
          color={props.colors?.descriptionColor}
          className="blog-card-description"
          type="p"
        >
          {props.description}
        </Typography>
      </BlogCardContentdDiv>
    </BlogCardDiv>
  );
};
