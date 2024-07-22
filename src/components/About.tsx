import vivek_dp from "../assets/vivek_dp.jpg";
import React, { useEffect } from "react";
import { SectorExp } from "./SectorExp";
import { QualitySvg } from "../assets/svgs/QualitySvg";
import { PeopleSvg } from "../assets/svgs/PeopleSvg";
import { TechnologySvg } from "../assets/svgs/TechnologySvg";
import FirmName from "./FirmName";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      {/* About Vivek */}
      <AboutVivek />

      {/* Core Values */}
      <CoreValues />

      {/* Sustainable Growth */}
      <SustainableGrowth />

      {/* Sector Experience */}
      <SectorExp />
    </div>
  );
}

export function AboutVivek() {
  return (
    <React.Fragment>
      <h1>Vivek Chotalia Founder and Managing Partner</h1>
      <div className="about-vivek">
        <div className="intro-text">
          <p>
            A dynamic and forward-looking young leader focused on transforming
            non-core business activities within enterprises. Grounded in the
            belief of Vasudhaiva Kutumbakam, the world as one family, he drives
            a mission for a technology-led, people-centric organization.
            Embracing an entrepreneurial mindset, he inspires passion,
            creativity, and innovation among his peers.
          </p>
          <p>
            A member of the Institute of Chartered Accountants of India (ICAI)
            with over 17 years of experience in accounting and assurance
            services across India and Qatar. He brings a wealth of knowledge and
            expertise in accounting, auditing, business process optimization,
            internal controls, and governance.
          </p>
          <p>
            Throughout his career, he has successfully managed engagements in
            various sectors including banking, financial services, insurance,
            manufacturing, infrastructure, hospitality, fintech, and real
            estate.
          </p>
          <p>
            In 2024, he founded <FirmName />, driving the firm with a focus on
            core values and expanding into outsourcing services for accounting
            advisory in IFRS/US GAAP reporting, financial modeling, XBRL, and
            more.
          </p>
        </div>
        <div>
          <img
            className="img-feat"
            src={vivek_dp}
            alt="Red30 Tech logo"
            title="Red30 Tech | Home"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export function CoreValues() {
  return (
    <React.Fragment>
      <h1>Core Values</h1>
      <div className="core-values">
        <div>
          <h2>Personal client service </h2>
          <p>Outsourcing solutions can not be a ‘one size fits all’.</p>
          <p>
            We specialize in curating personalized solutions through a thorough
            understanding of your business, consistent and transparent
            communication, and expertise backed by experience of close to 2
            decades.
          </p>
        </div>
        <div>
          <h2>Professional Relations</h2>
          <p>We connect with your business goals.</p>
          <p>
            Our dedicated team of professionals from Qatar and India will
            collaborate closely with you, understanding your business goals and
            fostering enduring relationships founded on transparency,
            reliability, and trust, backed by closed to two decades of
            experience and expertise.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export function SustainableGrowth() {
  return (
    <React.Fragment>
      <h1>Sustainable Growth</h1>
      <div className="sustainable-growth">
        <div>
          <QualitySvg />
          <h2>Quality</h2>
          <p>
            At <FirmName />, we are committed to delivering quality and value
            driven services and solutions. We follow rigorous internal quality
            control processes and leave little to human error. All our team
            members are continually trained for utmost quality consciousness.
          </p>
        </div>

        <div>
          <PeopleSvg />
          <h2>People</h2>
          <p>
            Our people are our most valuable asset. All our team members are
            hand-picked after a rigorous selection process. Our teams are a
            combination of young and dynamic qualified members as well as
            seniors and experienced professionals eager to work with our
            clients.
          </p>
        </div>

        <div>
          <TechnologySvg />
          <h2>Technology</h2>
          <p>
            Technology is a tool which is enhancing every aspect of human life.
            It is at the core to embrace newer technologies to be future ready
            and help our clients to do the same.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
