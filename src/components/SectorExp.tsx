import { getExperiences } from "../service/sector-exp-api";

export const SectorExp = () => {
  const experiences = getExperiences();

  return (
    <div className="container">
      <h1>Sector Experience</h1>
      <ul className="experiences">
        {experiences.map((exp) => (
          <li className="exp" key={exp.id}>
            <div className="card">
              <div className="card-container">
              <p className="exp-name">{exp.name}</p>
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
