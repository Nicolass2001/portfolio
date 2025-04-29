import styles from "./Menu.module.css";
import { Link } from "react-router";

function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Hello World!</h1>
        <p>Welcome to my portfolio page. More coming soon!</p>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
