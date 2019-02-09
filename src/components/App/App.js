import React, { Component } from "react";
import * as math from "mathjs";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display/Display";
import { CalculatorContainer } from "../Containers/Containers";

class App extends Component {
  state = {
    result: "",
    operator: "",
    operand: "",
    startCaptureSecondNumber: false,
    flashOperand: "",
  };

  handleNumber = ({ target }) => {
    const value = target.getAttribute("value");
    if (this.state.startCaptureSecondNumber) {
      this.setState({
        result: "",
        startCaptureSecondNumber: false,
      });
    }
    this.setState(prevState => ({ result: (prevState.result += value) }));
  };

  handleDecimal = ({ target }) => {
    const value = target.getAttribute("value");
    if (!this.state.result.includes(".")) {
      this.setState(prevState => ({ result: (prevState.result += value) }));
    }
  };

  handlePercentage = () => {
    this.setState(prevState => ({ result: prevState.result / 100 }));
  };

  handleSignChange = () => {
    this.setState(prevState => ({ result: prevState.result / -1 }));
  };

  handleOperator = ({ target }) => {
    const value = target.getAttribute("value");
    this.setState(prevState => ({
      operator: value,
      operand: prevState.result,
      startCaptureSecondNumber: true,
      flashOperand: "flash",
    }));
    setTimeout(() => {
      this.setState({ flashOperand: "" });
    }, 200);
  };

  operate = () => {
    this.setState(prevState => {
      const { result, operator, operand } = prevState;
      return {
        result: math.eval(operand + operator + result),
        operator: "",
        operand: "",
      };
    });
  };

  clear = () => {
    this.setState({
      result: "",
      operator: "",
      operand: "",
    });
  };

  render() {
    const { flashOperand, result } = this.state;
    return (
      <CalculatorContainer>
        <Display>
          <span className={flashOperand}>{result || 0}</span>
        </Display>
        <Buttons
          handleNumber={this.handleNumber}
          handleDecimal={this.handleDecimal}
          handleOperator={this.handleOperator}
          handlePercentage={this.handlePercentage}
          handleSignChange={this.handleSignChange}
          operate={this.operate}
          clear={this.clear}
        />
      </CalculatorContainer>
    );
  }
}
export default App;

/* 
todo: 
  - add limit so that font size shrinks when more numbers are added 
  - Center calculator in the middle of the page, check markdown previewer on how-to.   .
*/
