import "./cards.styles.css";

//pass in JSON OBJECT for users to map through, this has to be given from our button click
export const Card = ({ users }) => {
  return (
    // users.map((user) => {
    <div className="cards-container">
      {users.map(({ id, avatar, first_name, last_name, employment }) => {
        return (
          <div className="card-container" key={id}>
            <div className="avatar-container">
              <img className="avatar" src={avatar} alt="Robot"></img>
            </div>
            <p className="card-name">{`${first_name} ${last_name}`}</p>
            <p className="card-job-title">{employment.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
