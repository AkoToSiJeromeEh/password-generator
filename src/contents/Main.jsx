import React from "react";
import "../style/Main.css";

function Main() {
  const [darkmode, setDark] = React.useState(true);

  function HandleDarkMode() {
    setDark((prevVal) => !prevVal);
  }
  const [Password, setPasswod] = React.useState("");
  function generatePassword() {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+={}[]|:;<>.?/";
    const passwordLength = 15;
    let Passwords = '';

    for (let i = 0; i < passwordLength; i++) {

        const RandomIndex = Math.floor(Math.random() * characters.length);
        Passwords += characters[RandomIndex]
    }
    setPasswod(Passwords)
  }
  return (
    <main className={darkmode ? "dark" : "light"}>
      <div className="item-1">
        <h1>
          Secure Your Password<br></br>{" "}
          <span className="h1-span"> With Darling Password Generator</span>
        </h1>
        <p>Your Ultimate Random Password Generator</p>
      </div>
      <hr />
      <div className="item-2">
        <div className="pass-container">
        <i className="fa-solid fa-key"></i> : {Password}
        </div>
        <button
          onClick={generatePassword}
          className={darkmode ? "btn-gen-dark" : "btn-gen-light"}
        >
          <i className="fa-solid fa-key"></i> Generate Password
        </button>
      </div>
      <div className="button-container">
        <button
          className={darkmode ? "dark-btn" : "light-btn"}
          onClick={HandleDarkMode}
        >
          {darkmode ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </button>
      </div>
    </main>
  );
}

export default Main;
