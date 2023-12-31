import { useEffect, useState } from "react";
import "./App.css";

const buttons = [
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "C",
  "0",
  "=",
  "/",
];
function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);
  const calculate = () => {
    if (expression === "") {
      setResult("Error");
    } else {
      setResult(eval(expression));
    }
  };

  const handleButton = (e) => {
    const value = e.target.innerText;
    if (value >= "0" && value <= "9") {
      setExpression((expression) => (expression += value));
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setExpression((expression) => (expression += value));
    }
    if (value === "C") {
      setExpression("");
      setResult(null);
    }
    if (value === "=") calculate();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>React Calculator</h1>
      <input
        type="text"
        value={expression}
        style={{
          width: "20rem",
          border: "1px solid black",
          height: "2rem",
          overflow: "hidden",
        }}
      />

      <div style={{ margin: "1.6rem 0rem" }}>{result}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "20rem",
          width: "20rem",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={handleButton}
            style={{
              height: "4rem",
              width: "4rem",
              display: "flex",
              border: "1px solid black",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;