import { Link, NavLink } from "react-router-dom";
import { LogoSvg } from "../../assets/svgs/LogoSvg";
import HeaderItems from "./HeaderItems";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
      <MobileHeader></MobileHeader>
      <header className="container desktop-header">
          <Link to="/">
            <LogoSvg />
            {/* <img className="logo" src={logo}  alt="Logo" /> */}
          </Link>
          <HeaderItems></HeaderItems>
      </header>
    </>
  );
}
