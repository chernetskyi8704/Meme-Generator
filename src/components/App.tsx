import React from "react";
import "../styles/App.css";
import { Header } from "./Header.js";
import { Main } from "./Main.js";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}
