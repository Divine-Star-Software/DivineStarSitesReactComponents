import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { Grid } from "../../structural/grid/Grid";
import { ImageSizes } from "../shared.image.types";

import { Image } from "../single/Image";
import { ImageGalleryProps } from "./ImageGallery.types";

const GalleryWrap = styled.div<{ colors: any }>`
  @media (max-width: 600px) {
    background-color: rgba(10, 10, 10, 0.5);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 50px;
    box-shadow: 0px 5px 10px 5px rgba(1, 1, 1, 0.5);
    overflow-x: scroll;
    border: ${(props) => {
      if (props.colors?.borderColor) {
        let color = props.colors?.borderColor;
        return `solid 1px ${color}`;
      }

      return "1px solid var(--primary)";
    }};
  }
  @media (max-width: 600px) {
    overflow: auto;
    background-color: none;
  }

  
`;

const ImageWrap = styled.div<any>`
  @media (max-width: 600px) {
    min-width: 250px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 600px) {
    margin: auto;
    display: block;
  }
`;

export const ImageGallery = (props: ImageGalleryProps) => {
  const imageSize: ImageSizes = props.imageSize ? props.imageSize : "medium";
  return (
    <GalleryWrap colors={props.colors}>
      <Grid>
        {props.images.map((imageData, index) => {
          return (
            <ImageWrap key={index}>
              <Image
                clickAble
                openInNewTabOnClick={!props.popup}
                src={imageData.src}
                type={props.imageType || imageData.type}
                size={imageSize}
                colors={props.colors}
                thumb={props.thumb}
                webP={props.webP}
              ></Image>
            </ImageWrap>
          );
        })}
      </Grid>
    </GalleryWrap>
  );
};
