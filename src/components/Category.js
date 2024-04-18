import { getCategory } from "../service/services-api";

export default function Category({ catId, className }) {
  // const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <div className={["card-footer", className].join(' ')}>
        <p>{category.description}</p>
      </div>
      {/* <h2>{category.name}</h2>

      <ul className="session-list">
        {category?.sessions.map(session => (
          <li className="session" key={session.id}>
            <p className="session-name">{session.name}</p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
