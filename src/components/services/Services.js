import React, { useEffect } from "react";
import { getCategories } from "../../service/services-api";
import ServiceCard from "./ServiceCard";
import "./serviceCard.css";
import "../../index.css";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = getCategories();

  return (
    <div className="container">
      <h1>Services we provide</h1>
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-12 col-lg-6 mb-4" key={cat.id}>
            <ServiceCard
              caption={cat.name}
              description={cat.description}
              imageUrl={cat.imgSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
