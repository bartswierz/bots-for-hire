import { useContext } from "react";
import { BookmarkContext } from "../../contexts/bookmark.context";
import "./bookmark-icon.styles.scss";

export const BookmarkIcon = () => {
  const { bookmarkCount } = useContext(BookmarkContext);

  return (
    <div className="bookmark-icon-container">
      <div>
        <ion-icon className="bookmark-icon" name="bookmark-outline" size="large" color="light"></ion-icon>
      </div>
      <span className="bookmark-icon-count">{bookmarkCount}</span>
    </div>
  );
};

export default BookmarkIcon;

{
  /* {isSaveClicked ? <ion-icon name="bookmark" size="large"></ion-icon> : <ion-icon name="bookmark-outline" size="large"></ion-icon>} */
}
