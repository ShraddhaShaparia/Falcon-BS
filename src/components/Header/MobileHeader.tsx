import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import "./MobileHeader.css";
import { GoldenFalconSvg } from "../../assets/svgs/GoldenFalconSvg";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      displaySelectedTabText("Home");
    } else if (location.pathname === "/disclaimer") {
      displaySelectedTabText("Disclaimer");
    } else if (location.pathname === "/privacyPolicy") {
      displaySelectedTabText("Privacy Policy");
    }
  }, [location]);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const displaySelectedTabText = (selectedTabText: string) => {
    setSelectedTab(selectedTabText);
  };
  return (
    <div className="mobile-header-container">
      <div className="mobile-header">
        <GoldenFalconSvg />
        <h1 className="mobile-header-text">{selectedTab} </h1>
      </div>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <NavLink
          className="menu-item"
          to="/"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Home");
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="menu-item"
          to="/about"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("About US");
          }}
        >
          About US
        </NavLink>
        <NavLink
          className="menu-item"
          to="/services"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Services");
          }}
        >
          Services
        </NavLink>
        <NavLink
          className="menu-item"
          to="/usefulLinks"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Useful Links");
          }}
        >
          Useful Links
        </NavLink>
        <NavLink
          className="menu-item"
          to="/contact"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Contact US");
          }}
        >
          Contact US
        </NavLink>
        <NavLink
          className="menu-item"
          to="/careers"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Careers");
          }}
        >
          Careers
        </NavLink>
      </Menu>
    </div>
  );
};

export default MobileHeader;
