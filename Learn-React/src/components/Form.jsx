import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  const handleChange = (event) => {

    setText(event.target.value);

  };

  const handleClick = () => {
    setText(text.toUpperCase());
  }; 

  const clearText = () => {
    setText('');
  }

  return (
    <div className="mx-auto">
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>To Uppercase</button>
      <h2>Your text here</h2>
      <p>{text.split(' ').length - 1} words {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text}</p>
      <button onClick={clearText}>Clear text</button>
    </div>
  );
}

export default Form;
