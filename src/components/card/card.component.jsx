import "./card.styles.css";

//pass in JSON OBJECT for users to map through, this has to be given from our button click
export const Card = () => {
  return (
    <div className="card-container">
      <img></img>
      <span className="card-name"></span>
      <span className="card-job-title"></span>
    </div>
  );
};

export default Card;
