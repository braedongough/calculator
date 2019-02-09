import React from "react";
import { ButtonContainer } from "../Containers/Containers";
import { Button } from "./Button";

const Buttons = ({ handleNumber, handleOperator, clear, operate }) => (
  <ButtonContainer>
    <Button value={"C"} onClick={clear}>
      C
    </Button>
    <Button>+/-</Button>
    <Button>%</Button>
    <Button value={"/"} onClick={handleOperator}>
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
    <Button value={"*"} onClick={handleOperator}>
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
    <Button value={"-"} onClick={handleOperator}>
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

    <Button value={"+"} onClick={handleOperator}>
      +
    </Button>
    <Button value={0} onClick={handleNumber} className={"zero"}>
      0
    </Button>
    <Button>.</Button>
    <Button value={"="} onClick={operate}>
      =
    </Button>
  </ButtonContainer>
);

export default Buttons;
