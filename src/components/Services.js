import { getCategories } from "../service/services-api";
import { getIcon } from "./common/IconUtils";
import "../components/common/card.css";
import Category from "./Category";
import { useState } from "react";

export default function Services() {
  const categories = getCategories();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <div className="container">
      <h1>Services we provide</h1>

      <ul className="categories">
        {categories.map((cat, index) => (
          <li key={cat.id} >
            <div className="card" onClick={handleClick}>
              <div className="card-body" >
                <div className="split-card">
                  <div className="icon">{getIcon(cat.icon)}</div>
                  <p className="card-title">{cat.name}</p>
                  {/* <p className="card-desc">includes IFRS Compliant Accounting of transactions for your business</p> */}

                </div>

              </div>
              <Category className={cat.id} show={toggle} catId={cat.id}></Category>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
