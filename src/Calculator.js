// Calculator.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-4 offset-md-4 ">
          <div className="card">
            <div className="card-body">
              <input
                type="text"
                className="form-control mb-2"
                value={input}
                readOnly
              />

              <div className="row">
                {[7, 8, 9, '+'].map((value) => (
                  <button
                    key={value}
                    className="col-md-3 btn btn-outline-primary"
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="row">
                {[4, 5, 6, '-'].map((value) => (
                  <button
                    key={value}
                    className="col-md-3 btn btn-outline-primary"
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="row">
                {[1, 2, 3, '*'].map((value) => (
                  <button
                    key={value}
                    className="col-md-3 btn btn-outline-primary"
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="row">
                {[0, '.', '=', '/'].map((value) => (
                  <button
                    key={value}
                    className="col-md-3 btn btn-outline-primary"
                    onClick={() =>
                      value === '=' ? handleCalculate() : handleButtonClick(value)
                    }
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="row">
                <button
                  className="col-md-9 btn btn-outline-danger"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;








