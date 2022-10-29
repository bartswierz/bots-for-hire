import SizeForm from "../../size-form/size-form.component";
import "./sidebar.styles.scss";
// Displays our search, limit displayed inside here
export const Sidebar = ({ users, setUsers }) => {
  //Store user info from API - Moved to Sidebar
  // const [users, setUsers] = useState([]);

  const handleClick = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=9")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className="sidebar-container">
      <div className="button-container">
        <button className="fetch-btn" onClick={handleClick}>
          Find Bots
        </button>
      </div>
      <SizeForm users={users} />
    </div>
  );
};

export default Sidebar;
