import { NavLink } from "react-router-dom";

export default function HeaderItems() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/usefulLinks"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Useful Links
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/careers"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Careers
      </NavLink>
    </nav>
  );
}
