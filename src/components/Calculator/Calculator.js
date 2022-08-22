import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import { useState } from 'react';

const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const operat = ['+', '-', '*', '/', '.'];

  const updateCalc = value => {
    if (operat.includes(value) && calc === '' ||
      operat.includes(value) && operat.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operat.includes(value)) {
      setResult(eval(calc + value).toString());
    }

  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
          key={i}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const delbtn = () => {
    if (calc === '') {
      return
    }

    const value = calc.slice(0, -1);

    setCalc(value);

  }

  return (
    <div className='text'><h1>Calculator</h1>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {calc || '0'}
          </div>

          <div className="operators">
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('/')}>/</button>

            <button onClick={delbtn}>DEL</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {};

Calculator.defaultProps = {};

export default Calculator;
