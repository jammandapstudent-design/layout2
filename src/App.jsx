import React from "react";
import "./App.css";


const Header = ({ firstName, lastName }) => (
  <header className="section top">
    <div className="top-box"></div>
    <div className="center">
      <div className="center-inner-container">
        <div className="center-inner">{firstName}</div>
        <div className="center-inner">{lastName}</div>
      </div>
    </div>
    <div className="top-box"></div>
  </header>
);


const MiddleSection = () => (
  <main className="section middle">
    <div className="mid-left"></div>
    <div className="mid-right"></div>
    <div className="mid-right"></div>
  </main>
);


const Footer = ({ items }) => (
  <footer className="section bottom">
    {items.map((item, index) => (
      <div key={index} className={`bottom-box ${item.className || ""}`}>
        {item.content}
      </div>
    ))}
  </footer>
);


function App() {
 
  const footerItems = [
    { content: "", className: "purple" },
    { content: "C-PCIT9", className: "" },
    { content: "IT3B", className: "" },
    { content: "", className: "purple" },
  ];

  return (
    <div className="container">
      <Header firstName="John Adrielle" lastName="Mandap" />
      <MiddleSection />
      <Footer items={footerItems} />
    </div>
  );
}

export default App;