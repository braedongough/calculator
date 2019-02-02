import React from "react";
import { ButtonContainer } from "../Containers/Containers";
import { Button } from "./Button";

const Buttons = props => (
  <ButtonContainer>
    <Button label="1" value={1} onClick={props.handleClick}>
      1
    </Button>
    <Button label="2" value={2} onClick={props.handleClick}>
      2
    </Button>
    <Button label="3" value={3} onClick={props.handleClick}>
      3
    </Button>
    <Button label="+" value={"+"} onClick={props.handleClick}>
      +
    </Button>
    <Button label="4" value={4} onClick={props.handleClick}>
      4
    </Button>
    <Button label="5" value={5} onClick={props.handleClick}>
      5
    </Button>
    <Button label="6" value={6} onClick={props.handleClick}>
      6
    </Button>
    <Button label="-" value={"-"} onClick={props.handleClick}>
      -
    </Button>
    <Button label="7" value={4} onClick={props.handleClick}>
      7
    </Button>
    <Button label="8" value={5} onClick={props.handleClick}>
      8
    </Button>
    <Button label="9" value={6} onClick={props.handleClick}>
      9
    </Button>
    <Button label="X" value={"*"} onClick={props.handleClick}>
      x
    </Button>
    <Button label="C" value={"C"} onClick={props.handleClick}>
      C
    </Button>
    <Button label="0" value={0} onClick={props.handleClick}>
      0
    </Button>
    <Button label="=" value={"="} onClick={props.handleClick}>
      =
    </Button>
    <Button label="÷" value={"/"} onClick={props.handleClick}>
      ÷
    </Button>
  </ButtonContainer>
);

export default Buttons;
