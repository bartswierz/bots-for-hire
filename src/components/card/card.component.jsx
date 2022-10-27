import "./card.styles.scss";
import CardBtn from "../buttons/card-btn/card-btn.component";
import CardIcon from "../card-icon/card-icon.component";

export const Card = ({ user }) => {
  // console.log("in card: ", user.id);
  const { id, avatar, first_name, last_name, employment, email, phone_number, address } = user;

  return (
    <div className="card-container" key={id}>
      <div className="banner">
        <img className="avatar" src={avatar} alt="Robot"></img>
      </div>
      <div className="text-container">
        <CardIcon />
        <p className="card-name">{`${first_name} ${last_name}`}</p>
        <p className="card-title">{employment.title}</p>
        <p className="card-description">
          <ion-icon name="briefcase"></ion-icon>
          <span className="space">{employment.key_skill}</span>
        </p>
        <p className="card-description">
          <ion-icon name="mail"></ion-icon>
          <span className="space">{email}</span>
        </p>
        <p className="card-description">
          <ion-icon name="call"></ion-icon>
          <span className="space">{phone_number}</span>
        </p>
        <p className="card-description">
          <ion-icon name="location-sharp"></ion-icon>
          <span className="space">
            {address.city}, {address.state}
          </span>
        </p>
        <CardBtn />
      </div>
    </div>
  );
};

export default Card;
