import styled from "styled-components";
import React from "react";
import { GridProps } from "./Grid.types";

const GridDiv = styled.div<GridProps>`
  @media (max-width: 600px) {
    display: ${(props) => {
      if (props.mobileBreak) {
        return `block`;
      } 
      return `flex`;
    }};
    width: 100%;
    height: 100%;
  }
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: ${(props) => {
      let numCollumns = 2;
      if (props.collumns?.small) {
        numCollumns = props.collumns?.small;
      }
      let collumnWidth = `1fr`;
      if (props.collumnWidth) {
        collumnWidth = props.collumnWidth;
      }
      return `repeat(${numCollumns},${collumnWidth})`;
    }};


    gap: ${(props) => {
      if (props.collumnGap) {
        return props.collumnGap;
      }
      return `10px`;
    }};
    grid-auto-rows: ${(props) => {
      let rowHeight = "100px";
      if (props.rowHeight) {
        rowHeight = props.rowHeight;
      }
      return `minmax(${rowHeight}, auto)`;
    }};
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: ${(props) => {
      let numCollumns = 3;
      if (props.collumns?.medium) {
        numCollumns = props.collumns?.medium;
      }
      let collumnWidth = `1fr`;
      if (props.collumnWidth) {
        collumnWidth = props.collumnWidth;
      }
      return `repeat(${numCollumns},${collumnWidth})`;
    }};
    gap: ${(props) => {
      if (props.collumnGap) {
        return props.collumnGap;
      }
      return `10px`;
    }};
    grid-auto-rows: ${(props) => {
      let rowHeight = "100px";
      if (props.rowHeight) {
        rowHeight = props.rowHeight;
      }
      return `minmax(${rowHeight}, auto)`;
    }};
  }
  @media (min-width: 1500px) {
    display: grid;
    grid-template-columns: ${(props) => {
      let numCollumns = 4;
      if (props.collumns?.large) {
        numCollumns = props.collumns?.large;
      }
      let collumnWidth = `1fr`;
      if (props.collumnWidth) {
        collumnWidth = props.collumnWidth;
      }
      return `repeat(${numCollumns},${collumnWidth})`;
    }};
    gap: ${(props) => {
      if (props.collumnGap) {
        return props.collumnGap;
      }
      return `10px`;
    }};
    grid-auto-rows: ${(props) => {
      let rowHeight = "100px";
      if (props.rowHeight) {
        rowHeight = props.rowHeight;
      }
      return `minmax(${rowHeight}, auto)`;
    }};
  }
`;

export const Grid = (props: GridProps) => {
  return <GridDiv {...props}>{props.children}</GridDiv>;
};
