import "./cards.styles.css";

//pass in JSON OBJECT for users to map through, this has to be given from our button click
export const Card = ({ users }) => {
  return (
    // users.map((user) => {
    <div className="cards-container">
      {users.map(({ id, avatar, first_name, last_name, employment, email, phone_number, address }) => {
        return (
          <div className="card-container" key={id}>
            <div className="banner">
              <img className="avatar" src={avatar} alt="Robot"></img>
            </div>
            <p className="card-name">{`${first_name} ${last_name}`}</p>
            <p className="card-title">{employment.title}</p>
            <p className="card-description">
              <strong>Key Skill: </strong>
              {employment.key_skill}
            </p>
            <p className="card-description">
              <strong>Email: </strong>
              {email}
            </p>
            <p className="card-description">
              <strong>Phone: </strong>
              {phone_number}
            </p>
            <p className="card-description">
              <strong>Location: </strong>
              {address.city}, {address.state}
            </p>
            <div className="card-btn-container">
              <button className="card-btn">Let's Chat</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
