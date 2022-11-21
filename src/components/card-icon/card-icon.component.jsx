import "./card-icon.styles.scss";
import { useState, useContext } from "react";
import { BookmarkContext } from "../../contexts/bookmark.context";

export const CardIcon = ({ user }) => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const { bookmarkList, bookmarkCount, addBookmarkToList } = useContext(BookmarkContext);
  //addBookmark
  const addNewBookmarkToList = () => addBookmarkToList(user);
  //removeBoomark similar to card-btn

  // We want to pass the user information to our list
  // const addNewHireToList = () => addHireToList(user);
  // const removeNewHireFromList = () => removeHireFromList(user.id);

  //Switch isClicked state to change button text on click
  const handleClick = () => {
    // console.log("inside handle click bookmark icon", user);
    // addNewBookmarkToList(user);

    // const saveClick = !isSaveClicked;
    // setIsSaveClicked(saveClick);
    if (!isSaveClicked) {
      addNewBookmarkToList(user);
      // const click = !isClicked;
      const click = !isSaveClicked;
      setIsSaveClicked(click);
    }
    //Already clicked, remove to undo
    else {
      // removeNewBookmarkFromList(hiredList, user.id);
      const click = !isSaveClicked;
      setIsSaveClicked(click);
    }
  };

  return (
    <div className="card-icon" onClick={handleClick}>
      {isSaveClicked ? <ion-icon name="bookmark" size="large"></ion-icon> : <ion-icon name="bookmark-outline" size="large"></ion-icon>}
    </div>
  );
};

export default CardIcon;
