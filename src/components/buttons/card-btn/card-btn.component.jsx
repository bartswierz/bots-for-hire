import { useState } from "react";

import "./card-btn.styles.scss";

export const CardBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    const click = !isClicked;
    setIsClicked(click);
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
