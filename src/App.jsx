import "./App.css";
import { useState } from "react";

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const handleClick = (id, number) => {
    if (id === 1) {
      if (numOne === 0) {
        setNumOne(number);
      } else {
        setNumOne(`${numOne}${number}`);
      }
    }
    if (id === 2) {
      if (numTwo === 0) {
        setNumTwo(number);
      } else {
        setNumTwo(`${numTwo}${number}`);
      }
    }
  };

  const handleClickZero = (id) => {
    if (id === 1) {
      if (numOne === 0) {
        setNumOne(0);
      } else {
        setNumOne(`${numOne}${0}`);
      }
    }
    if (id === 2) {
      if (numTwo === 0) {
        setNumTwo(0);
      } else {
        setNumTwo(`${numTwo}${0}`);
      }
    }
  };

  const handleClear = (id) => {
    if (id === 1) {
      setNumOne(0);
    }
    if (id === 2) {
      setNumTwo(0);
    }
  };

  const handleOperator = (input) => {
    setOperator(input);
  };

  const handleResult = () => {
    if (operator === "÷" && numTwo === 0) {
      alert("Cannot divide by 0!");
      setResult(0);
      return;
    }
    setResult(eval(`${numOne} ${operator} ${numTwo}`));
    handleClear(1);
    handleClear(2);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => handleClick(1, 1)}>1</button>
          <button onClick={() => handleClick(1, 2)}>2</button>
          <button onClick={() => handleClick(1, 3)}>3</button>
          <button onClick={() => handleClick(1, 4)}>4</button>
          <button onClick={() => handleClick(1, 5)}>5</button>
          <button onClick={() => handleClick(1, 6)}>6</button>
          <button onClick={() => handleClick(1, 7)}>7</button>
          <button onClick={() => handleClick(1, 8)}>8</button>
          <button onClick={() => handleClick(1, 9)}>9</button>
          <button onClick={() => handleClickZero(1)}>0</button>
          <button onClick={() => handleClear(1)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => handleClick(2, 1)}>1</button>
          <button onClick={() => handleClick(2, 2)}>2</button>
          <button onClick={() => handleClick(2, 3)}>3</button>
          <button onClick={() => handleClick(2, 4)}>4</button>
          <button onClick={() => handleClick(2, 5)}>5</button>
          <button onClick={() => handleClick(2, 6)}>6</button>
          <button onClick={() => handleClick(2, 7)}>7</button>
          <button onClick={() => handleClick(2, 8)}>8</button>
          <button onClick={() => handleClick(2, 9)}>9</button>
          <button onClick={() => handleClickZero(2)}>0</button>
          <button onClick={() => handleClear(2)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
