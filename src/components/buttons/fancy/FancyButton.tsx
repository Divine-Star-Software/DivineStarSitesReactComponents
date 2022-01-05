import React, { FC, Fragment, useState } from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

import { FancyButtonProps } from "./FancyButton.types";

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

const StyledFancyButton = styled.button<FancyButtonProps>`
  font-size: 18px;
  font-weight: 1000;
  cursor: pointer;
  outline: none;
  position: relative;
  margin-bottom: 25px;

  width: ${(props) => {
    if (props.width) {
      return `${props.width}px`;
    } else {
      return "200px";
    }
  }};
  
  height: ${(props) => {
    if (props.height) {
      return `${props.height}px`;
    } else {
      return "50px";
    }
  }};

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
      return "none";
    }
  }};
  box-shadow: ${(props) => {
    if (props.colors?.boxShadowColor) {
      return `0px 0px 10px 2px ${props.colors?.boxShadowColor}`;
    } else {
      return "0px 0px 10px 2px rgba(10, 10, 10, 0.8)";
    }
  }};

  animation: ${(props) => {
    if (props.animating) {
      return css`
        ${GlowAnimation} 2s linear infinite
      `;
    } else {
      return "";
    }
  }};

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

    transition: all 0.5s linear;
  }
`;

const FancyButtonInnerContainer = styled.div<{ center?: boolean }>`
text-align: ${(props) => {
    if (props.center) {
      return "center";
    } else {
      return "left";
    }
  }};
  margin: ${(props) => {
    if (props.center) {
      return "auto";
    } else {
      return "left";
    }
  }};
  display : block;
`;

const FancyButtonSVG = styled.svg<{
  strokeLocalColor?: boolean;
  strokeOnHoverColor?: string;
}>`
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke: ${(props: any) => {
    if (props.strokeLocalColor) {
      return props.strokeLocalColor;
    } else {
      return "var(--primary-light-1)";
    }
  }};
  &:hover,
  &:active,
  &:focus {
    stroke: ${(props: any) => {
      if (props.strokeOnHoverColor) {
        return props.strokeOnHoverColor;
      } else {
        return "rgba(36, 238, 252, 0.849)";
      }
    }};
  }
  stroke-dasharray: 120;
  transition: 1s ease-out;
  animation: ${SVGStrokeAnimation} 20s linear infinite;
`;

export const FancyButton: FC<FancyButtonProps> = (props: FancyButtonProps) => {
  const [animating, setAnimating] = useState(false);

  const width: number = props.width ? props.width : 200;
  const height: number = props.height ? props.height : 50;
  const svgPoints = `${width - 1},1 ${width - 1},${height - 1} 1,${
    height - 1
  } 1,1 ${width - 1},1`;

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
  let lookingToStop = false;
  return (
    <div style={{ position: "relative" }}>
      <FancyButtonInnerContainer center={props.center}>
        <StyledFancyButton
          width={props.width}
          height={props.height}
          onAnimationIteration={() => {
            if (lookingToStop) {
              setAnimating(false);
              lookingToStop = false;
            }
          }}
          onMouseEnter={() => {
            setAnimating(true);
          }}
          onMouseLeave={() => {
            lookingToStop = true;
          }}
          onClick={(event) => {
            onClick(event);
          }}
          animating={animating}
          center={true}
          colors={props.colors}
          disabled={props.disabled}
        >
          <Fragment>
            <FancyButtonSVG
              width={`${width}px`}
              height={`${height}px`}
              viewBox={`0 0 ${width} ${height}`}
              //@ts-ignore
              strokeLocalColor={props.colors?.strokeColor}
              strokeOnHoverColor={props.colors?.strokeColorOnHover}
            >
              <polyline points={svgPoints} />
              <polyline points={svgPoints} />
            </FancyButtonSVG>
            {props.children}
          </Fragment>
        </StyledFancyButton>
      </FancyButtonInnerContainer>
    </div>
  );
};
