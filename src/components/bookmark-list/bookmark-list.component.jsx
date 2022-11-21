import "./bookmark-list.styles.scss";
import { BookmarkContext } from "../../contexts/bookmark.context";
import { HiredContext } from "../../contexts/hired.context";
import { useContext } from "react";

// export const HiredList = ({ user }) => {
export const BookmarkList = () => {
  // Hired List holds our current list
  // const { hiredList, hiredCount, removeHireFromList } = useContext(HiredContext);
  const { bookmarkList, bookmarkCount, removeFromBookmarkList } = useContext(BookmarkContext);
  const { addHireToList } = useContext(HiredContext);

  // Passing in user info as object, user = id, first_name, last_name, avatar
  const hireBookmarkHandler = (user) => {
    //add to hirelist
    addHireToList(user);
    //remove from bookmark list
    removeFromBookmarkList(user.id);
  };

  return (
    <div className="bookmark-container">
      <h1 className="bookmark-header">Current Bookmarks</h1>
      {/* <h1 className="hired-header">{hiredCount === 0 ? "No Hires Yet" : `Number of Hires: ${hiredCount}`}</h1> */}
      {/* Deconstructing user for readability */}
      <div>
        {bookmarkList.map(({ id, first_name, last_name, avatar }) => {
          return (
            <div key={id}>
              <div className="bookmark-text">
                {first_name} {last_name} <img src={avatar} className="bookmark-avatar" alt="Employee"></img>
                {/* Add a Checkmark to ADD to HIRE LIST */}
                <div>
                  {/* TODO: onClick, add to hired list AND remove from bookmark list */}
                  <ion-icon
                    onClick={() => hireBookmarkHandler({ id, first_name, last_name, avatar })}
                    name="checkmark-sharp"
                    color="light"
                  ></ion-icon>
                </div>
                <div className="remove-btn">
                  <ion-icon onClick={() => removeFromBookmarkList(id)} name="trash-outline"></ion-icon>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookmarkList;
