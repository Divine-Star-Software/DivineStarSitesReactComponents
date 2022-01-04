import React, { FC, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import { ButtonProps } from "./Button.types";

const SVGStrokeAnimation = keyframes`
0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 1200;
  }
`;

const GlowAnimation = keyframes`
0% {
    box-shadow: 0px 0px 10px 2px rgba(10, 10, 10, 0.8);
  }
  10% {
    box-shadow: 0px 0px 10px 2px rgba(36, 104, 252, 0.8);
  }
  50% {
    box-shadow: 0px 0px 20px 5px rgba(36, 166, 252, 0.8);
  }
  90% {
    box-shadow: 0px 0px 10px 2px rgba(36, 104, 252, 0.8);
  }
  100% {
    box-shadow: 0px 0px 10px 2px rgba(10, 10, 10, 0.8);
  }
`;

const DefaultButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-weight: 1000;
  color: ${(props) => {
    if (props.colors?.color) {
      return props.colors?.color;
    } else {
      return "var(--primary-light-1)";
    }
  }};
  background-color: ${(props) => {
    if (props.colors?.bgColor) {
      return props.colors?.bgColor;
    } else {
      return "rgba(10, 10, 10, 0.8)";
    }
  }};
  border: ${(props) => {
    if (props.colors?.borderColor) {
      return `1px solid ${props.colors?.borderColor}`;
    } else {
      return "1px solid var(--primary)";
    }
  }};
  box-shadow: ${(props) => {
    if (props.colors?.boxShadowColor) {
      return `0px 5px 5px 2px ${props.colors?.boxShadowColor}`;
    } else {
      return "0px 5px 5px 2px rgba(1, 1, 1, 0.5)";
    }
  }};
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;

  display: ${(props) => {
    if (props.center) {
      return "block";
    } else {
      return "inline-block";
    }
  }};

  margin: ${(props) => {
    if (props.center) {
      return "auto";
    } else {
      return "0";
    }
  }};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "5px";
      case "medium":
        return "10px";
      case "large":
        return "15px";
      default:
        return "0px";
    }
  }};

  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "100px";
      case "medium":
        return "150px";
      case "large":
        return "200px";
      default:
        return "100px";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "1em";
      case "medium":
        return "1.5em";
      case "large":
        return "1.8em";
      default:
        return "1em";
    }
  }};

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  transition: all 0.5s linear;
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
    color: ${(props) => {
      if (props.colors?.colorOnHover) {
        return props.colors?.colorOnHover;
      } else {
        return "rgba(10, 10, 10, 0.8) !important";
      }
    }};
    background-color: ${(props) => {
      if (props.colors?.bgColorOnHover) {
        return props.colors?.bgColorOnHover;
      } else {
        return "var(--primary-light-1)";
      }
    }};
    border: ${(props) => {
      if (props.colors?.borderColor) {
        return `1px solid ${props.colors?.borderColor}`;
      } else {
        return "1px solid var(--primary-alt-2)";
      }
    }};
    box-shadow: ${(props) => {
      if (props.colors?.boxShadowColorOnHover) {
        return `0px 0px 10px 5px ${props.colors?.boxShadowColorOnHover}`;
      } else {
        return "0px 0px 10px 5px var(--primary-alt-2)";
      }
    }};

    transition: all 0.5s linear;
  }
`;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  let onClick: Function = () => {};
  if (props.nav && props.navLink) {

    onClick = () => {
      if (!props.navToNewTab) {
        (window as any).location.href = props.navLink;
      } else {
        window.open(props.navLink, "_blank");
      }
    };
  } else {
    if (props.onClick) {
      onClick = props.onClick;
    }
  }

  return (
    <DefaultButton
      className={props.className}
      onClick={(event) => {  
        onClick(event);
      }}
      center={true}
      size={props.size}
      colors={props.colors}
      disabled={props.disabled}
    >
      {props.children}
    </DefaultButton>
  );
};
