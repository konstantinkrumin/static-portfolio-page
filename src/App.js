import React from "react";
import "./styles/main.scss";

import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Main />
      <Footer />
    </div>
  );
}
