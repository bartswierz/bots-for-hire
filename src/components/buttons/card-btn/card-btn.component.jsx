import { useState } from "react";

import "./card-btn.styles.scss";
import { HiredContext } from "../../../contexts/hired.context";
import { useContext } from "react";

// export const CardBtn = () => {
export const CardBtn = ({ user }) => {
  // console.log("cardbtn: ", user);
  const { addHireToList } = useContext(HiredContext);
  // const { hiredList, addHireToList } = useContext(HiredContext);
  // const { first_name, last_name, id} = user;
  const { first_name } = user;

  const [isClicked, setIsClicked] = useState(false);

  const [isHired, setIsHired] = useState([]);
  // Add Bot into our list of hired bots
  // const addToHiredList = () => {
  //   console.log("Bot Hired!");
  // };

  // We want to pass the user information to our list
  const addNewHireToList = () => addHireToList(user);

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    // console.log("card-btn: BUTTON CLICKED!");
    // console.log("Before: IsHired: ", isHired);
    // const newVal = [...isHired, user];

    // on click we want to add to our hiredList from context
    // setIsHired(newVal);
    // console.log("After: IsHired: ", isHired);

    addNewHireToList(user);

    // addNewHireToList( first_name );

    // addHireToList(user);
    // addHireToList(first_name);

    // console.log("hiredList: ", hiredList);

    // switches button text
    const click = !isClicked;
    setIsClicked(click);

    // console.log("Before: IsHired: ", isHired);
    // const newVal = [...isHired, user];
    // setIsHired(newVal);
    // console.log("After: IsHired: ", isHired);
  };

  return (
    <div className="card-btn-container">
      <button className="card-btn" onClick={handleClick}>
        {isClicked ? "You're Hired!" : "I'm Available"}
      </button>
    </div>
  );
};

export default CardBtn;

// export const CardBtn = () => {
//   const [isClicked, setIsClicked] = useState(false)

//   return (
//     <div className="card-btn-container">
//       <button className="card-btn">You're Hired!</button>
//     </div>
//   );
// };

//return if(isClicked === 'true') (
//   <div className="card-btn-container">
//   <button className="card-btn">You're Hired!</button>
// </div> );

/////////////////////
// return;
//   {
//     isClicked ? (
//       <div className="card-btn-container">
//         <button className="card-btn" onClick={() => handleClick(isClicked)}>
//           You're Hired!
//         </button>
//       </div>
//     ) : (
//       <div className="card-btn-container">
//         <button className="card-btn" onClick={() => handleClick(isClicked)}>
//           Hire Me
//         </button>
//       </div>
//     );
//   }
