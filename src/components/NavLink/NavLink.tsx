import "./NavLink.css";
import { NavLink as RRNavLink } from "react-router";

function NavLink({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <RRNavLink to={link} className="link">
        {children}
      </RRNavLink>
    </li>
  );
}

export default NavLink;
