import "./fetch-button.styles.css";

import { useState } from "react";

export const FetchButton = ({ text }) => {
  // //using array because we will store an ARRAY OF OBJECTS
  // const [users, setUsers] = useState([]);

  // const handleClick = () => {
  //   // alert("inside handle click");
  //   fetch("https://random-data-api.com/api/users/random_user?size=10")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       setUsers(users);
  //       console.log("Users: ", users);
  //     });
  //   // .then((data) => console.log(data));
  // };

  return (
    <div>
      <button className="fetch-btn" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

/* 
  .then((response) => response.json()) -> Converts RESOLVED RESPONSE into a JSON OBJECT
  
  .then((data) => console.log(data)); -> Each data is the individual object of information. Would be run 10 times because we have 10 users to grab(size in url set to '10')
*/
