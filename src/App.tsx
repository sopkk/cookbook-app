import React from "react";

import Recipes from "./components/Recipes/Recipes";
import Toolbar from "./components/UI/Navigation/Toolbar/Toolbar";
import "./App.css";

const App = () => {
  return (
    <div className="div-background">
      <Toolbar />
      <Recipes />
    </div>
  );
};

export default App;
