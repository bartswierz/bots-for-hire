import { useState } from "react";

import "./card-btn.styles.scss";

// export const CardBtn = () => {
export const CardBtn = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);

  // console.log("user: ", user);

  const [isHired, setIsHired] = useState([]);
  // Add Bot into our list of hired bots
  // const addToHiredList = () => {
  //   console.log("Bot Hired!");
  // };

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    console.log("card-btn: BUTTON CLICKED!");
    console.log("Before: IsHired: ", isHired);
    const newVal = [...isHired, user];
    setIsHired(newVal);
    console.log("After: IsHired: ", isHired);

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
