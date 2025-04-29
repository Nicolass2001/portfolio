import "./App.css";
import { BrowserRouter as Router } from "react-router";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Content />
      </div>
    </Router>
  );
}

export default App;
