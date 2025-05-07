import "./Menu.css";
import NavLink from "../Links/NavLink";

function Menu() {
  return (
    <header className="container">
      <h1>Nicolas Pereira</h1>
      <p>Developer</p>
      <nav>
        <ul className="menu">
          <NavLink link="/">Home</NavLink>
          <NavLink link="/about">About</NavLink>
          <NavLink link="/projects">Projects</NavLink>
          <NavLink link="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
