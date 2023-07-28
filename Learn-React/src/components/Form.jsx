import React, { useState, useRef } from "react";

function Form() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setText(text.toUpperCase());
  };

  const clearText = () => {
    setText("");
  };

  const handleCopy = () => {
    // Check if the inputRef.current is available (not null)
    if (inputRef.current) {
      // Access the value of the input element using inputRef.current.value
      const textToCopy = inputRef.current.value;

      // Use the Clipboard API to write the text to the clipboard
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Text successfully copied to the clipboard
          console.log("Text copied to clipboard:", textToCopy);
        })
        .catch((error) => {
          // Failed to copy text to the clipboard
          console.error("Failed to copy text:", error);
        });
    }
  };

  // Calculate the word count by splitting the text by spaces
  const wordCount = text.trim().split(/\s+/).length;

  // Calculate the character count (including spaces)
  const characterCount = text.length;

  return (
    <div className="mx-auto">
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={handleClick}>To Uppercase</button>
      <h2>Your text here</h2>
      <p>
        {wordCount} words {characterCount} characters
      </p>
      <h3>Preview</h3>
      <p>{text}</p>
      <button onClick={clearText}>Clear text</button>
      <button onClick={handleCopy}>Copy text</button>
    </div>
  );
}

export default Form;
