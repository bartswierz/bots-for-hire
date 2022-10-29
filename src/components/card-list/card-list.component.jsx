import "./card-list.styles.scss";
// import CardBtn from "../buttons/card-btn/card-btn.component";
// import CardIcon from "../card-icon/card-icon.component";
import Card from "../card/card.component";
//test
//pass in JSON OBJECT for users to map through, this has to be given from our button click
export const CardList = ({ users }) => {
  return (
    <div className="cards-container">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default CardList;
