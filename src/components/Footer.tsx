import { NavLink } from "react-router-dom";
import FirmName from "./FirmName";

export const Footer = () => {
  const getClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-active" : "";
  return (
    <footer className="container">
      <p>
        &copy;2024 | <FirmName />
      </p>

      <nav>
        <NavLink to="/privacyPolicy" className={getClass}>
          Privacy Policy
        </NavLink>
        <NavLink to="/disclaimer" className={getClass}>
          Disclaimer
        </NavLink>
      </nav>
    </footer>
  );
};
