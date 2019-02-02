import React, { Component } from "react";
import * as math from "mathjs";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display/Display";
import { CalculatorContainer } from "../Containers/Containers";

class App extends Component {
  state = { result: [] };
  handleClick = e => {
    console.log(e.target);
    const value = e.target.getAttribute("value");
    if (value === "=") {
      const operated = this.operate(this.state.result);
      this.setState(() => ({ result: operated }));
      return;
    } else if (value === "C") {
      this.setState(() => ({ result: [] }));
      return;
    }
    const newValue = (this.state.result += value);

    this.setState(() => ({ result: newValue }));
  };
  operate(result) {
    return math.eval(result);
  }
  render() {
    return (
      <CalculatorContainer>
        <Display>{this.state.result}</Display>
        <Buttons handleClick={this.handleClick} />
      </CalculatorContainer>
    );
  }
}
export default App;
