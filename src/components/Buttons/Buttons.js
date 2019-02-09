import React from "react";
import { ButtonContainer } from "../Containers/Containers";
import { Button } from "./Button";

const Buttons = ({
  handleNumber,
  handleOperator,
  handleDecimal,
  handlePercentage,
  handleSignChange,
  clear,
  operate,
}) => (
  <ButtonContainer>
    <Button value={"C"} onClick={clear} className={"altButton"}>
      C
    </Button>
    <Button onClick={handleSignChange} className={"altButton"}>
      +/-
    </Button>
    <Button onClick={handlePercentage} className={"altButton"}>
      %
    </Button>
    <Button value={"/"} onClick={handleOperator} className={"operatorButton"}>
      ÷
    </Button>
    <Button value={7} onClick={handleNumber}>
      7
    </Button>
    <Button value={8} onClick={handleNumber}>
      8
    </Button>
    <Button value={9} onClick={handleNumber}>
      9
    </Button>
    <Button value={"*"} onClick={handleOperator} className={"operatorButton"}>
      x
    </Button>
    <Button value={4} onClick={handleNumber}>
      4
    </Button>
    <Button value={5} onClick={handleNumber}>
      5
    </Button>
    <Button value={6} onClick={handleNumber}>
      6
    </Button>
    <Button value={"-"} onClick={handleOperator} className={"operatorButton"}>
      -
    </Button>
    <Button value={1} onClick={handleNumber}>
      1
    </Button>
    <Button value={2} onClick={handleNumber}>
      2
    </Button>
    <Button value={3} onClick={handleNumber}>
      3
    </Button>

    <Button value={"+"} onClick={handleOperator} className={"operatorButton"}>
      +
    </Button>
    <Button value={0} onClick={handleNumber} className={"zero"}>
      0
    </Button>
    <Button value={"."} onClick={handleDecimal}>
      .
    </Button>
    <Button value={"="} onClick={operate} className={"operatorButton"}>
      =
    </Button>
  </ButtonContainer>
);

export default Buttons;
