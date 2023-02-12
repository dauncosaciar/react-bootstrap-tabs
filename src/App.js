import BasicTabs from "./components/BasicTabs";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicTabs />
      </header>
    </div>
  );
}

export default App;
