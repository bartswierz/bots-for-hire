// import SizeForm from "../../size-form/size-form.component";
import FindBtn from "../buttons/find-btn/find-btn.component";
import HiredList from "../hired-list/hired-list.component";
import BookmarkList from "../bookmark-list/bookmark-list.component";
import BookmarkIcon from "../bookmark-icon/bookmark-icon.component";
import WorkIcon from "../work-icon/work-icon.component";
import { useState, useContext } from "react";

import "./sidebar.styles.scss";
import { useCallback } from "react";
import { BookmarkContext } from "../../contexts/bookmark.context";
import { HiredContext } from "../../contexts/hired.context";

//hiredIconClicked ? <HiredList users={users} /> : <BookmarkList users={users} />

export const Sidebar = ({ users, setUsers }) => {
  // Toggle content for bookmark list & hire list
  const { isBookmarkOpen } = useContext(BookmarkContext);
  const { isHireOpen } = useContext(HiredContext);

  return (
    <div className="sidebar-container">
      <div className="flex">
        <BookmarkIcon />
        <FindBtn setUsers={setUsers} />
        <WorkIcon />
      </div>
      {isBookmarkOpen ? <BookmarkList /> : null}
      {isHireOpen ? <HiredList /> : null}
    </div>
  );
};

export default Sidebar;
