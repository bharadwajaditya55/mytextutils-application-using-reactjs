import Navbar from "./Mycomponents/Navbar";
import Textforms from "./Mycomponents/Textforms";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "dark";
    }
  };
  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <Textforms heading1="Enter the text below : " mode={mode} />
      </div>
    </>
  );
}
export default App;
