import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [resultValue, setresultValue] = useState("0");

  const calculate = (e) => {
    if(inputValue=="0"){
      setinputValue(e);
    }else{
    setinputValue(inputValue + e);
  }
};

const Result = ()=>{
  setresultValue(eval(inputValue));
}

  const Clear =()=>{
    setinputValue(0);
    setresultValue(0)
  }


  return (
    <div className="App" >
      <header className="App-header">
        <h1>Calculator</h1>
      </header>

      <div className="main">
        <div className="result">
          <div className="input">{inputValue}</div>
          <div className="output">{resultValue}</div>
        </div>
        <div className="button">
          <button className="btn top btnSp" onClick={Clear}>Clear</button>
          <button onClick={() => calculate("*")} className="btn top">
            *
          </button>
            <button onClick={() => calculate("-")} className="btn top">
              -
            </button>
          <button onClick={() => calculate("+")} className="btn top">
            +
          </button>
          <button onClick={() => calculate("/")} className="btn top">
            /
          </button>
          <button onClick={() => calculate("1")} className="btn">
            1
          </button>
          <button onClick={() => calculate("2")} className="btn">
            2
          </button>
          <button onClick={() => calculate("3")} className="btn">
            3
          </button>
          <button onClick={() => calculate("4")} className="btn">
            4
          </button>
          <button onClick={() => calculate("5")} className="btn">
            5
          </button>
          <button onClick={() => calculate("6")} className="btn">
            6
          </button>
          <button onClick={() => calculate("7")} className="btn">
            7
          </button>
          <button onClick={() => calculate("8")} className="btn">
            8
          </button>
          <button onClick={() => calculate("9")} className="btn">
            9
          </button>
          <button onClick={() => calculate(".")} className="btn">
            .
          </button>
          <button onClick={() => calculate("0")} className="btn">
            0
          </button>
          <button className="btn btnSp" onClick={Result}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
