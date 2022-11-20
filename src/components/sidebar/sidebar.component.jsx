import SizeForm from "../../size-form/size-form.component";
import FindBtn from "../buttons/find-btn/find-btn.component";
import HiredList from "../hired-list/hired-list.component";
import "./sidebar.styles.scss";

export const Sidebar = ({ users, setUsers }) => {
  return (
    <div className="sidebar-container">
      <FindBtn setUsers={setUsers} />

      {/* Display Container here with Avatar, Name, Title  */}
      <HiredList users={users} />
      {/* <HiredList /> */}
    </div>
  );
};

export default Sidebar;
