import React, { useState } from 'react'

function Theme() {

  const [theme, setTheme] = useState({
    color: "white",
    backgroundColor: "#61DAFB",
  });

  const [ btnText, setBtnText ] = useState('Enable Dark Mode');

  const toggleTheme = () => {
     if(theme.backgroundColor === '#61DAFB'){
        setTheme({
           color: "white",
           backgroundColor: "black"
        });

        setBtnText('Enable Light Mode');
  } else {
    setTheme({
      color: "white",
      backgroundColor: "#61DAFB",
    });

    setBtnText('Enable Dark Mode');
  }
}

  return (

<div className="m-2 space-y-2">
  <div
    className="group flex flex-col gap-2 rounded-lg  p-5 "
    tabIndex="1" style={theme}
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> HTML </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 rounded-lg  p-5 "
    tabIndex="2" style={theme}
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> CSS </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180 "
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>

  <div
    className="group flex flex-col gap-2 rounded-lg p-5 "
    tabIndex="3" style={theme}
  >
    <div className="flex cursor-pointer items-center justify-between">
      <span> JAVASCRIPT </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
      />
    </div>
    <div
      className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
  </div>
  <button style={theme} onClick={toggleTheme} className='border'>{btnText}</button>
</div>

  )
}

export default Theme