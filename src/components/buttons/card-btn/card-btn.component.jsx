import { useState } from "react";

import "./card-btn.styles.scss";
import { HiredContext } from "../../../contexts/hired.context";
import { useContext } from "react";

// export const CardBtn = () => {
export const CardBtn = ({ user }) => {
  // console.log("cardbtn: ", user);
  const { addHireToList, removeHireFromList, hiredList } = useContext(HiredContext);

  // console.log("CardBTN: hiredList: ", hiredList);
  const { first_name } = user;

  const [isClicked, setIsClicked] = useState(false);

  // const [isHired, setIsHired] = useState(false);

  // We want to pass the user information to our list
  const addNewHireToList = () => addHireToList(user);
  const removeNewHireFromList = () => removeHireFromList(user.id);

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    // IF not clicked yet, add user to list
    // if (!isClicked) addNewHireToList(user);
    // //Already clicked, remove to undo
    // else removeNewHireFromList(hiredList, user.id);
    // // else removeNewHireFromList(hiredList, user);

    // const click = !isClicked;
    // setIsClicked(click);

    // IF not clicked yet, add user to list
    if (!isClicked) {
      addNewHireToList(user);
      // const click = !isClicked;
      const click = !isClicked;
      setIsClicked(click);
    }
    //Already clicked, remove to undo
    else {
      removeNewHireFromList(hiredList, user.id);
      const click = !isClicked;
      setIsClicked(click);
    }
  };

  return (
    <div className="card-btn-container">
      <button className="card-btn" onClick={handleClick}>
        {isClicked ? "Undo" : `Hire ${first_name}`}
      </button>
    </div>
  );
};

export default CardBtn;
