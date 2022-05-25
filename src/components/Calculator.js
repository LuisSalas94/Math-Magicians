import React, { Component } from 'react';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
    };
    this.click = this.click.bind(this);
  }

  click(state, btnName) {
    const newState = calculate(state, btnName);
    this.setState(newState);
  }

  render() {
    const obj = this.state;
    const { next, operation, total } = this.state;

    return (
      <div className="calculator-section">
        <div className="calculator-container">
          <div className="result">
            {next || operation || total || 0}
          </div>
          <button
            type="button"
            onClick={() => this.click(obj, 'AC')}
            className="btn btn-ac"
          >
            AC
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '+/-')}
            className="btn btn-plus-minus"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '%')}
            className="btn btn-percent"
          >
            %
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '÷')}
            className="btn btn-divide orange-color"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '7')}
            className="btn btn-7"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '8')}
            className="btn btn-8"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '9')}
            className="btn btn-9"
          >
            9
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, 'x')}
            className="btn btn-multiply orange-color"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '4')}
            className="btn btn-4"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '5')}
            className="btn btn-5"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '6')}
            className="btn btn-6"
          >
            6
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '-')}
            className="btn btn-minus orange-color"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '1')}
            className="btn btn-1"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '2')}
            className="btn btn-2"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '3')}
            className="btn btn-3"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '+')}
            className="btn btn-add orange-color"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '0')}
            className="btn btn-0"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '.')}
            className="btn btn-decimal"
          >
            .
          </button>
          <button
            type="button"
            onClick={() => this.click(obj, '=')}
            className="btn btn-equal orange-color"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
