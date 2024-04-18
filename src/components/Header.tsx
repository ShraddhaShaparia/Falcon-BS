import { Link, NavLink } from "react-router-dom";
import { LogoSvg } from "../assets/svgs/LogoSvg";

export default function Header() {

  return (
    <header className="container">
      <Link to="/">
        <LogoSvg />
        {/* <img className="logo" src={logo}  alt="Logo" /> */}
      </Link>

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
    </header>
  );
}
