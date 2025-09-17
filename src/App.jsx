import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="section top">
        <div className="top-box"></div>
        <div className="center">
          <div className="center-inner-container">
            <div className="center-inner"></div>
            <div className="center-inner"></div>
          </div>
        </div>
        <div className="top-box"></div>
      </div>

      {/* Middle Section */}
      <div className="section middle">
        <div className="mid-left"></div>
        <div className="mid-right"></div>
        <div className="mid-right"></div>
      </div>

      {/* Bottom Section */}
      <div className="section bottom">
        <div className="bottom-box purple"></div>
        <div className="bottom-box"></div>
        <div className="bottom-box"></div>
        <div className="bottom-box purple"></div>
      </div>
    </div>
  );
}

export default App;