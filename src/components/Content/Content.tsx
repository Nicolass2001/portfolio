import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import "./Content.css";
import { Route, Routes } from "react-router";

function Content() {
  return (
    <div className="content-container">
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default Content;
