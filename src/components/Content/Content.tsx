import About from "../About/About";
import "./Content.css";
import { Route, Routes } from "react-router";

function Content() {
  return (
    <main className="content">
      <Routes>
        <Route
          path="/"
          element={
            <div className="joke">
              CSS <br />
              IS AWESOME
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </main>
  );
}

export default Content;
