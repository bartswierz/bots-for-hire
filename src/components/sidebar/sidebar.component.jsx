// import SizeForm from "../../size-form/size-form.component";
import FindBtn from "../buttons/find-btn/find-btn.component";
import HiredList from "../hired-list/hired-list.component";
import BookmarkList from "../bookmark-list/bookmark-list.component";
import BookmarkIcon from "../bookmark-icon/bookmark-icon.component";
import WorkIcon from "../work-icon/work-icon.component";

import "./sidebar.styles.scss";

//hiredIconClicked ? <HiredList users={users} /> : <BookmarkList users={users} />

export const Sidebar = ({ users, setUsers }) => {
  return (
    <div className="sidebar-container">
      <div className="flex">
        <BookmarkIcon />
        <FindBtn setUsers={setUsers} />
        <WorkIcon />
      </div>

      <HiredList />
      <BookmarkList />
    </div>
  );
};

export default Sidebar;
