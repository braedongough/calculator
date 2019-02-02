import React, { Component } from "react";
import * as math from "mathjs";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display/Display";
import { CalculatorContainer } from "../Containers/Containers";

class App extends Component {
  state = { result: "" };
  handleClick = e => {
    const value = e.target.getAttribute("value");
    if (value === "=") {
      const operated = this.operate(this.state.result);
      this.setState(() => ({ result: operated }));
      return;
    } else if (value === "C") {
      this.setState(() => ({ result: [] }));
      return;
    }

    this.setState(prevState => ({ result: (prevState.result += value) }));
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

/* 
todo: 
  - Add updated state so that operator isn't shown in display but is still used to make calculation similar to how the apple calc works. 
  - add limit so that you can't input over 12 digits - make it flash red when limit is reached. 
  - Center calculator in the middle of the page, check markdown previewer on how-to.   .
*/
