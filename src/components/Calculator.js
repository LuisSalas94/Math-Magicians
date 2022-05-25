import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-section">
        <div className="calculator-container">
          <div className="result">0</div>
          <button type="button" className="btn btn-ac">
            AC
          </button>
          <button type="button" className="btn btn-plus-minus">
            +/-
          </button>
          <button type="button" className="btn btn-percent">
            %
          </button>
          <button type="button" className="btn btn-divide orange-color">
            ÷
          </button>
          <button type="button" className="btn btn-7">
            7
          </button>
          <button type="button" className="btn btn-8">
            8
          </button>
          <button type="button" className="btn btn-9">
            9
          </button>
          <button type="button" className="btn btn-multiply orange-color">
            &times;
          </button>
          <button type="button" className="btn btn-4">
            4
          </button>
          <button type="button" className="btn btn-5">
            5
          </button>
          <button type="button" className="btn btn-6">
            6
          </button>
          <button type="button" className="btn btn-minus orange-color">
            -
          </button>
          <button type="button" className="btn btn-1">
            1
          </button>
          <button type="button" className="btn btn-2">
            2
          </button>
          <button type="button" className="btn btn-3">
            3
          </button>
          <button type="button" className="btn btn-add orange-color">
            +
          </button>
          <button type="button" className="btn btn-0">
            0
          </button>
          <button type="button" className="btn btn-decimal">
            .
          </button>
          <button type="button" className="btn btn-equal orange-color">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
