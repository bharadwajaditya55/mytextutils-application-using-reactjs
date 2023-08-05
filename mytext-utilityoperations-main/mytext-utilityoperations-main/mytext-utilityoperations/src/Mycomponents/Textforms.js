import React, { useState } from "react";

export default function Textforms(props) {
  const handleupclickupper = () => {
    // console.log("button was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleupclicklower = () => {
    // console.log("button was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleupclickclear = () => {
    // console.log("button was clicked" + text);
    let newtext = "";
    setText(newtext);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const copyit = (event) => {
    setText(event.target.value);
    let newtext = navigator.clipboard.writeText(text);
    console.log(newtext);
    alert("text copied successfully");
  };
  const removeSpace = () => {
    setText(text.replace(/ +(?= )/g, ""));
    console.log("Remove spaces is called");
  };
  function DownLoadFile(filename, NewText) {
    const element = document.createElement("a");

    //A blob is a data type that can store binary data
    // "type" is a MIME type
    // It can have a different value, based on a file you want to save
    const blob = new Blob([NewText], { type: "plain/text" });

    //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
    const fileUrl = URL.createObjectURL(blob);

    //setAttribute() Sets the value of an attribute on the specified element.
    element.setAttribute("href", fileUrl); //file location
    element.setAttribute("download", filename); // file name
    element.style.display = "none";

    //use appendChild() method to move an element from one element to another
    document.body.appendChild(element);
    element.click();

    //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
    document.body.removeChild(element);
  }
  const DownloadText = () => {
    let fileName = "your.txt";

    DownLoadFile(fileName, text);
  };
  const [text, setText] = useState();
  return (
    <>
      <div className="mb-3" style={{ color: props.mode === "#042743" }}>
        <h1>{props.heading1}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          style={{
            backgroundColor: props.mode === "darkgrey",
            color: props.mode === "#042743",
          }}
          id="myBox"
          rows="8"
        ></textarea>

        <button
          type="submit"
          className="btn btn-dark mx-2 my-2"
          onClick={handleupclickupper}
        >
          convert to uppercase
        </button>
        <button
          type="submit"
          className="btn btn-dark mx-2 my-2"
          onClick={handleupclicklower}
        >
          convert to lowercase
        </button>
        <button
          type="submit"
          className="btn btn-dark mx-2 my-2"
          onClick={handleupclickclear}
        >
          clear
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-dark mx-2 my-2"
        >
          Speak
        </button>
        <button
          type="submit"
          onClick={copyit}
          className="btn btn-dark mx-2 my-2"
        >
          copy
        </button>
        <button
          type="submit"
          onClick={removeSpace}
          className="btn btn-dark mx-2 my-2"
        >
          delete extra spaces
        </button>
        <button
          type="submit"
          onClick={DownloadText}
          className="btn btn-dark mx-2 my-2"
        >
          download text
        </button>
      </div>
      <div
        className="container mx-2 my-3"
        style={{ color: props.mode === "#042743" }}
      >
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>  */}
        {/* <p>{ 0.008*text.split(" ").length} Minutes read</p> */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
