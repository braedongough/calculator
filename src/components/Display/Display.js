import styled from "styled-components";

export const Display = styled.div`
  height: 30px;
  font-size: ${props => props.fontSize + "px"};
  width: auto;
  height: 75px;
  display: absolute;
  border: 1px solid #333333;
  text-align: right;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  overflow: hidden;
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
