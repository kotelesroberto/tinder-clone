import React from "react";
import "./App.css";
import Header from "./Header";
import SwipeButttons from "./SwipeButttons";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* TinderCards */}
      <TinderCards />

      {/* SwipeButttons */}
      <SwipeButttons />
    </div>
  );
}

export default App;
