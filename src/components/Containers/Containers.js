import styled from "styled-components";

export const CalculatorContainer = styled.div`
  position: relative;
  width: 300px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, 50px);
`;
