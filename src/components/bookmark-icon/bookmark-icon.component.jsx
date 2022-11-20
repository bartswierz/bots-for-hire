import { useState } from "react";
import "./bookmark-icon.styles.scss";

export const BookmarkIcon = () => {
  // Will display bookmarkCount in future
  // return <button>0</button>;

  // const [isSaveClicked, setIsSaveClicked] = useState(false);

  //On click render bookmarkList / remove hiredList
  const handleClick = () => {};

  return (
    <div className="bookmark-container">
      <div onClick={handleClick}>
        <ion-icon className="bookmark-icon" name="bookmark-outline" size="large" color="light"></ion-icon>
      </div>
      <span className="bookmark-count">0</span>
    </div>
  );
};

export default BookmarkIcon;

{
  /* {isSaveClicked ? <ion-icon name="bookmark" size="large"></ion-icon> : <ion-icon name="bookmark-outline" size="large"></ion-icon>} */
}
