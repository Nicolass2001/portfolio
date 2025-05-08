import "./NavLink.css";
import { NavLink as RRNavLink } from "react-router";

type NavLinkProps = {
  link: string;
  children: React.ReactNode;
};

function NavLink({ link, children }: NavLinkProps) {
  return (
    <li>
      <RRNavLink to={link} className="link">
        {children}
      </RRNavLink>
    </li>
  );
}

export default NavLink;
