import "./card-icon.styles.scss";
import { useState } from "react";

export const CardIcon = () => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    const saveClick = !isSaveClicked;
    setIsSaveClicked(saveClick);
  };

  return (
    <div className="card-icon" onClick={handleClick}>
      {isSaveClicked ? <ion-icon name="bookmark" size="large"></ion-icon> : <ion-icon name="bookmark-outline" size="large"></ion-icon>}
    </div>
  );
};

export default CardIcon;
