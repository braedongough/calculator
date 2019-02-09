import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: rgb(128, 127, 127);
  border-radius: 2px;
  font-size: 25px;
  &:focus {
    outline: none;
    background: rgb(170, 170, 170);
  }
  &.altButton {
    background: rgb(102, 101, 102);
  }
  &.operatorButton {
    background: rgb(253, 158, 43);
  }
  &.zero {
    grid-column-start: span 2;
  }
`;
//! RBG colors entered aren't the same as the ones displayed in the browser
