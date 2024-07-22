import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Categories from "./services/Services";
import Home from "./Home";
import { UsefulLinks } from "./UsefulLinks";
import { ContactUs } from "./ContactUs";
import { Disclaimer } from "./Disclaimer";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Careers } from "./Careers";

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Categories />}>
        {/* <Route path=":catId" element={<Category />} /> */}
      </Route>
      <Route path="usefulLinks" element={<UsefulLinks />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="careers" element={<Careers />} />
      <Route path="disclaimer" element={<Disclaimer />} />
      <Route path="privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
    </Routes>
  );
};
