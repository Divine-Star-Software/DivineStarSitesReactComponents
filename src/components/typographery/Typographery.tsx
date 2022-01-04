import React, { FC, Fragment, useState } from "react";
import styled, { css } from "styled-components";
type varients = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
type TypographyProps = {
    children: JSX.Element | string;
    varient: varients;
    className?: string;
    center?: boolean;
  };
  
  const styles : any = [];
  function Typography(props: TypographyProps) {
    const getClassName = (varient: varients) => {
      let className = props.className;
      if (!className) {
        switch (varient) {
          case "p":
            className = styles["default-span"];
            break;
          case "p":
            className = styles["default-paragraph"];
            break;
          case "h1":
            className = styles["default-h1-title"];
  
            break;
          case "h2":
            className = styles["default-h2-title"];
  
            break;
          case "h3":
            if (!className) {
              className = styles["default-h3-title"];
            }
            break;
          case "h4":
            className = styles["default-h4-title"];
  
            break;
          case "h5":
            className = styles["default-h5-title"];
  
            break;
          case "h6":
            className = styles["default-h6-title"];
            break;
        }
      }
      if (props.center) {
        className = `${className} ${styles["default-text-center"]}`;
      }
      return className;
    };
  
    const element = (varient: varients, childern: JSX.Element | string) => {
      let className = getClassName(varient);
      switch (varient) {
        case "span":
          return <span className={className}>{childern}</span>;
        case "p":
          return <p className={className}>{childern}</p>;
        case "h1":
          return <h1 className={className}>{childern}</h1>;
        case "h2":
          return <h2 className={className}>{childern}</h2>;
        case "h3":
          return <h3 className={className}>{childern}</h3>;
        case "h4":
          return <h4 className={className}>{childern}</h4>;
        case "h5":
          return <h5 className={className}>{childern}</h5>;
        case "h6":
          return <h6 className={className}>{childern}</h6>;
        default:
          return <pre className={className}>{childern}</pre>;
      }
    };
  
    return element(props.varient, props.children);
  }
  
  export default Typography;