import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { getFileExtension } from "../../util/getFileExtension";
import { ImageProps } from "./Image.types";

const StyledImage = styled.img<ImageProps>`
  ${(props) => {
    if (!props.banner) {
      let returnString = "max-width";
      if (props.maxWidth) {
        return (returnString += `:${props.maxWidth}px;`);
      }
      switch (props.size) {
        case "xsmall":
          returnString += ":50px;";
          break;
        case "small":
          returnString += ":100px;";
          break;
        case "medium":
          returnString += ":300px;";
          break;
        case "large":
          returnString += ":800px;";
          break;
        case "xlarge":
          returnString += ":1000px;";
          break;
        case "hero":
          returnString += ":1200px;";
          break;
        case "full":
          returnString += ":100%;";
          break;
        default:
          returnString += ":200px;";
          break;
      }
      return returnString;
    }
    return "";
  }}

  width: ${(props) => {
    if (props.type == "post" || props.banner) {
      return "100%";
    }
    return "100%";
  }};
  height: ${(props) => {
    if (props.type == "post" || props.banner) {
      return "100%";
    }
    return "100%";
  }};
  object-fit: ${(props) => {
    if (props.type == "post" || props.banner) {
      return "cover";
    }
    return "contain";
  }};
  display: ${(props) => {
    if (props.center) {
      return "block";
    }
    return "inherit";
  }};
  margin: ${(props) => {
    if (props.center) {
      return "auto";
    }
    return "0";
  }};
  box-shadow: ${(props) => {
    if (props.type == "post") {
      return "0px 5px 10px 5px rgba(1, 1, 1, 0.5)";
    }
    return "none";
  }};
  border-radius: ${(props) => {
    if (props.type == "post") {
      return "3px";
    }
    return "0px";
  }};
  border: ${(props) => {
    if (props.type == "post") {
      let color = "var(--primary)";
      if (props.colors?.borderColor) {
        color = props.colors?.borderColor;
      }

      return `solid 1px ${color}`;
    }
    return "none";
  }};
`;

const ImageWrap = styled.span<ImageProps>`
  height: ${(props) => {
    if (props.type == "post") {
      return "100%";
    }
    return "100%";
  }};
  margin: ${(props) => {
    if (props.center || props.banner) {
      return "auto";
    }
    return "0";
  }};
  display: ${(props) => {
    if (props.type == "post" || props.center) {
      return "block";
    }
    return "inherit";
  }};

  ${(props) => {
    if (props.banner) {
      let returnString = "max-width";
      if (props.maxWidth) {
        return (returnString += `:${props.maxWidth}px;`);
      }

      switch (props.size) {
        case "xsmall":
          returnString += ":300px;";
          break;
        case "small":
          returnString += ":500px;";
          break;
        case "medium":
          returnString += ":800px;";
          break;
        case "large":
          returnString += ":1000px;";
          break;
        case "xlarge":
          returnString += ":1200px;";
          break;
        case "hero":
          returnString += ":1400px;";
          break;
        case "full":
          returnString += ":100%;";
          break;
        default:
          returnString += ":1000px;";
          break;
      }
      return returnString;
    }
    return "";
  }}
`;

/**# Image
 * ---
 * Custom image used for static site rendering.
 * Suppourts souce sets for webp images.
 */
export const Image: FC<ImageProps> = (props: ImageProps) => {
  let srcPrefix = "";

  const getContainer = (sourceSet: JSX.Element) => {
    return <ImageWrap {...props}>{sourceSet}</ImageWrap>;
  };

  const getImageAlt = () => {
    if (props.alt) {
      return props.alt;
    }
    if (props.data?.alt) {
      return props.data.alt;
    }
    return "No alt provided.";
  };

  const processImgSrc = (src: string) => {
    let newSource = src;
    if (props.thumb) {
      let fileExtension = getFileExtension(src);
      if (fileExtension) {
        newSource = src.replace(`.${fileExtension}`, `-thumb.${fileExtension}`);
      }
    }

    return newSource;
  };
  const getImageSrc = () => {
    let src = "";
    if (props.src) {
      src = processImgSrc(props.src);
    }
    if (props.data?.src) {
      src = processImgSrc(props.data.src);
    }

    return `${srcPrefix}${src}`;
  };

  const getSourceSet = (img: JSX.Element) => {
    if (!props.webP && !props.data?.webP) {
      return <Fragment>{img}</Fragment>;
    } else {
      const rawImgSource = getImageSrc();
      let fileExtension = getFileExtension(rawImgSource);
      let webPsource = rawImgSource;
      if (fileExtension) {
        webPsource = getImageSrc().replace(fileExtension, "webp");
      }
      let contentType = "image/jpeg";
      if (fileExtension == ".png") {
        contentType = "image/png";
      }

      return (
        <picture>
          <source type="image/webp" srcSet={webPsource} />
          <source type={contentType} srcSet={rawImgSource} />
          {img}
        </picture>
      );
    }
  };

  const getImage = () => {
    let onClick = () => {};
    if (props.openInNewTabOnClick) {
      onClick = () => {
        window.open(getImageSrc(), "_blank");
      };
    }

    return (
      <StyledImage
        {...props}
        tabIndex={0}
        onClick={() => {
          onClick();
        }}
        src={getImageSrc()}
        alt={getImageAlt()}
        width={props.data?.width}
        height={props.data?.height}
        style={{
          minHeight: props.data?.minHeight,
          maxHeight: props.data?.maxHeight,
          minWidth: props.data?.minWidth,
          maxWidth: props.data?.maxWidth,
        }}
      />
    );
  };

  return getContainer(getSourceSet(getImage()));
};
