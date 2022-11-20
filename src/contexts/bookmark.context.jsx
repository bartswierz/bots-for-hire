import { createContext, useState, useEffect } from "react";

//Values we are accessing
export const BookmarkContext = createContext({
  bookmarkList: [],
  bookmarkCount: 0,
  addToBookmarkList: () => {},
  removeFromBookmarkList: () => {},
});

export const BookmarkProvider = ({ children }) => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmarkList, setBookmarkList] = useState([]);
};
