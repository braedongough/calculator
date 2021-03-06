import styled from "styled-components";

export const Display = styled.div`
  color: white;
  background: rgba(85, 84, 84, 0.9);
  border: 1px solid black;
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 85px;
  display: absolute;
  text-align: right;
  vertical-align: baseline;
  padding: 0px 15px;
  overflow: scroll;
  font-size: ${props => props.fontSize + "px"};
  font-weight: 200;
  span.flash {
    animation: flash linear 0.05s 1;
  }
  @keyframes flash {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
