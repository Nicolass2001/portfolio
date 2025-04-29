import styles from "./Content.module.css";
import { Route, Routes } from "react-router";

function Content() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.joke}>
            CSS <br />
            IS AWESOME
          </div>
        }
      />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  );
}

export default Content;
