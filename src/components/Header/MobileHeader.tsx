import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./MobileHeader.css";
import HeaderItems from "./HeaderItems";
import { GoldenFalconSvg } from "../../assets/svgs/GoldenFalconSvg";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

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
        <Link
          className="menu-item"
          to="/"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Home");
          }}
        >
          Home
        </Link>
        <Link
          className="menu-item"
          to="/about"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("About US");
          }}
        >
          About US
        </Link>
        <Link
          className="menu-item"
          to="/services"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Services");
          }}
        >
          Services
        </Link>
        <Link
          className="menu-item"
          to="/usefulLinks"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Useful Links");
          }}
        >
          Useful Links
        </Link>
        <Link
          className="menu-item"
          to="/contact"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Contact US");
          }}
        >
          Contact US
        </Link>
        <Link
          className="menu-item"
          to="/careers"
          onClick={() => {
            closeSideBar();
            displaySelectedTabText("Careers");
          }}
        >
          Careers
        </Link>
      </Menu>
    </div>
  );
};

export default MobileHeader;
