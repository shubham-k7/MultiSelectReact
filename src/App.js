import React from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import options from "./options";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown options={options} />
      </header>
    </div>
  );
}

export default App;
