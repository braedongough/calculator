import React, { Component } from "react";
import * as math from "mathjs";
import Buttons from "../Buttons/Buttons";
import { Display } from "../Display/Display";
import { CalculatorContainer } from "../Containers/Containers";

class App extends Component {
  constructor(props) {
    super(props);
    this.Display = React.createRef();
  }
  state = {
    result: "",
    operator: "",
    operand: "",
    startCaptureSecondNumber: false,
    flashOperand: "",
    fontSize: 45,
  };

  componentWillUpdate() {
    console.log("updating", this.checkOverflow());
    if (this.checkOverflow()) {
      return this.setState(prevState => ({
        fontSize: (prevState.fontSize -= 5),
      }));
    }
  }
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
        result: math
          .format(math.eval(operand + operator + result), { precision: 14 })
          .toString(),
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
  checkOverflow() {
    return this.Display.current.scrollWidth > this.Display.current.clientWidth;
  }

  render() {
    const { flashOperand, result, fontSize } = this.state;
    return (
      <CalculatorContainer>
        <Display ref={this.Display} fontSize={fontSize}>
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
-format text so overflow is accounted for. Use componentWillUpdate lifecycle method and: 
?function isOverflown(element) {
?    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
} 
 currently the app won't resize the text if input is cleared or if the number computed is of a value that could be fit in the text area. 
 Also, need to figure out how to push the text down to the bottom of the element without forcing it with margin. 

*/
