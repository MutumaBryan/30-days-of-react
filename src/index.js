import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const headerStyles = {
  textAlign: "center",
};

const header = (
  <header style={headerStyles}>
    <h1>Subscribe</h1>
  </header>
);

const mainStyles = {
  padding: '5px',
  textAlign: 'center',
};

const main = (
  <main style={mainStyles}>
    <p>Sign up with your email address to receive news and updates</p>
    <form style={{padding: '10px', textAlign: 'center'}}>
      <input id="first-name" type="text" placeholder="First name" style={{padding: '15px', borderRadius: '5px', border: '0', margin: '5px', width: '20%'}}></input>
      <input id="last-name" type="text" placeholder="Last name"style={{padding: '15px', borderRadius: '5px', border: '0', margin: '5px', width: '20%'}}></input>
      <input id="email" type="email" placeholder="Email" style={{padding: '15px',borderRadius: '5px', border: '0', margin: '5px', width: '20%'}}></input>
      <br></br>
      <input type="submit" value="Subscribe" style={{fontFamily: `Montserrat`, backgroundColor: 'red', width: '20%', textAlign: 'center', padding: '2vh 3vw', borderRadius: '7px', border: '0', margin: '10px'}}></input>
    </form>
  </main>
);

const appStyles = {
  backgroundColor: "#61dafb",
  fontFamily: `Montserrat`,
  padding: '10% 10%',
  margin: '5vh 5vh',
  borderRadius: '7px'
};

// JSX element, app
const app = (
  <div style={appStyles}>
    {header}
    {main}
  </div>
);

root.render(app);
