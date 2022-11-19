import "./find-btn.styles.scss";

export const FindBtn = ({ setUsers }) => {
  //Fetch 9 new users
  const handleClick = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=9")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className="button-container">
      <button className="fetch-btn" onClick={handleClick}>
        Find Bots
      </button>
    </div>
  );
};

export default FindBtn;
