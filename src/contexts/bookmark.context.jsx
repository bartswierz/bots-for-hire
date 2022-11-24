import { createContext, useState, useEffect } from "react";

//Helper function for setting bookmark
const addBookmark = (bookmarkList, bookmarkToAdd) => {
  const alreadyBookmarked = bookmarkList.find((bookmark) => bookmark.id === bookmarkToAdd.id);

  console.log("Already set this bookmark");

  if (alreadyBookmarked) {
    return [...bookmarkList];
  }

  return [...bookmarkList, { ...bookmarkToAdd }];
};
//Helper function for adding bookmark
const removeBookmark = (bookmarkList, bookmarkToRemove) => {
  const newBookmarkList = bookmarkList.filter((bookmark) => bookmark.id !== bookmarkToRemove);

  return newBookmarkList;
};

//helper function for remove bookmark

//Values we are accessing
export const BookmarkContext = createContext({
  bookmarkList: [],
  bookmarkCount: 0,
  isBookmarkOpen: false,
  addBookmarkToList: () => {},
  removeFromBookmarkList: () => {},
  toggleBookmarkList: () => {},
});

export const BookmarkProvider = ({ children }) => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);

  //Update bookmark count for Icon, runs each time we add/remove hire
  useEffect(() => {
    const newBookmarkCount = bookmarkList.length;
    console.log("Bookmark useEffect, bookmarkCount: ", newBookmarkCount);
    setBookmarkCount(newBookmarkCount);
  }, [bookmarkList]);

  //add bookmark to list
  const addBookmarkToList = (bookmarkToAdd) => {
    setBookmarkList(addBookmark(bookmarkList, bookmarkToAdd));
  };

  //remove bookmark from list
  const removeFromBookmarkList = (bookmarkToRemove) => {
    setBookmarkList(removeBookmark(bookmarkList, bookmarkToRemove));
  };

  // If open, return false to hide bookmark list
  const toggleBookmarkList = () => {
    isBookmarkOpen ? setIsBookmarkOpen(false) : setIsBookmarkOpen(true);
  };

  //Functions we will pass to children
  const value = { bookmarkList, bookmarkCount, isBookmarkOpen, toggleBookmarkList, addBookmarkToList, removeFromBookmarkList };

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};
