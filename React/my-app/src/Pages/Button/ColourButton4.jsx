import React, { useState } from "react";
import "./ColourButton.css";

function App() {
  const [button1Color, setButton1Color] = useState("black");
  const [button2Color, setButton2Color] = useState("black");
  const [button3Color, setButton3Color] = useState("black");
  const [button4Color, setButton4Color] = useState("black");

  const ClickButton1 = () => {
    setButton1Color("green");
    setButton2Color("red");
    setButton3Color("red");
    setButton4Color("red");
  };

  const ClickButton2 = () => {
    setButton1Color("red");
    setButton2Color("green");
    setButton3Color("red");
    setButton4Color("red");
  };

  const ClickButton3 = () => {
    setButton1Color("red");
    setButton2Color("red");
    setButton3Color("green");
    setButton4Color("red");
  };

  const ClickButton4 = () => {
    setButton1Color("red");
    setButton2Color("red");
    setButton3Color("red");
    setButton4Color("green");
  };

  return (
    <div className="main">
      <button style={{ backgroundColor: button1Color }} onClick={ClickButton1}>
        Button 1
      </button>
      <button style={{ backgroundColor: button2Color }} onClick={ClickButton2}>
        Button 2
      </button>
      <button style={{ backgroundColor: button3Color }} onClick={ClickButton3}>
        Button 3
      </button>
      <button style={{ backgroundColor: button4Color }} onClick={ClickButton4}>
        Button 4
      </button>
    </div>
  );
}

export default App;
