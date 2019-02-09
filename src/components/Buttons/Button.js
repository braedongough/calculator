import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: rgb(128, 127, 127);
  font-size: 25px;
  border-top: 1px solid black;
  border-bottom: none;
  border-right: 1px solid black;
  border-left: none;
  &:focus {
    outline: none;
  }
  &:active {
    background: rgb(170, 170, 170);
  }
  &.altButton {
    background: rgb(102, 101, 102);
    &:active {
      background: rgb(125, 125, 125);
    }
  }
  &.operatorButton {
    background: rgb(253, 158, 43);
    &:active {
      background: rgb(280, 175, 60);
    }
  }
  &.leftSide {
    border-left: 1px solid black;
  }
  &.bottom {
    border-bottom: 1px solid black;
  }
  &.borderRadiusBottomLeft {
    border-bottom-left-radius: 4px;
  }
  &.borderRadiusBottomRight {
    border-bottom-right-radius: 4px;
  }
  &.zero {
    grid-column-start: span 2;
  }
`;
//! RBG colors entered aren't the same as the ones displayed in the browser
