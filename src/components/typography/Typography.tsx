import React, { FC } from "react";
import styled from "styled-components";
import { TypographyProps } from "./Typography.types";

const StyledH1 = styled.h1<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledH2 = styled.h2<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledH3 = styled.h3<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledH4 = styled.h4<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledH5 = styled.h5<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledH6 = styled.h6<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledParagraph = styled.p<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledSpan = styled.span<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-color)";
    }
  }};
  margin-left: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  margin-right: ${(props) => {
    if (props.center) {
      return "0 !important";
    } else {
      return "15px";
    }
  }};
  text-align: ${(props) => {
    if (props.center) {
      return "center";
    }
    if (props.align) {
      return props.align;
    }
    return "inherit";
  }};
`;

const StyledPre = styled.pre<TypographyProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "var(--default-pre-color)";
    }
  }};
`;

export const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  switch (props.type) {
    case "span":
      return <StyledSpan {...props} />;
    case "p":
      return <StyledParagraph {...props} />;
    case "h1":
      return <StyledH1 {...props} />;
    case "h2":
      return <StyledH2 {...props} />;
    case "h3":
      return <StyledH3 {...props} />;
    case "h4":
      return <StyledH4 {...props} />;
    case "h5":
      return <StyledH5 {...props} />;
    case "h6":
      return <StyledH6 {...props} />;
    default:
      return <StyledPre {...props} />;
  }
};

export default Typography;
