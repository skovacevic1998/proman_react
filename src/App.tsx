import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Homepage, Navbar } from "./component";
import { AnimatedBackground } from "./component/util/AnimatedBackground";

function App() {
  const colors = [
    "rgba(0, 153, 204, 0.1)",
    "rgba(255, 136, 0, 0.1)",
    "rgba(0, 255, 136, 0.1)",
  ];
  const interval = 10000;

  return (
    <Router>
      <AnimatedBackground colors={colors} interval={interval}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content_div">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </AnimatedBackground>
    </Router>
  );
}

export default App;
