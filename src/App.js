import "./App.scss";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Sidebar from "./components/sidebar/sidebar.component";

const App = () => {
  //Store user info from API - Moved to Sidebar
  const [users, setUsers] = useState([]);

  // Run effect, will run once to fetch and populate our cards
  useEffect(() => {
    // console.log("INSIDE useEffect");
    fetch("https://random-data-api.com/api/users/random_user?size=9")
      .then((response) => response.json())
      .then((userInfo) => {
        setUsers(userInfo);
        // console.log("userInfo: ", userInfo);
      });
  }, []);

  return (
    // <div className="App">
    <div className="app">
      <Sidebar user={users} setUsers={setUsers} />
      <div className="theme">
        <div>
          <header className="company-header">Bots-For-Hire</header>
          <div className="saved-dropdown"></div>
        </div>
        <CardList users={users} />
      </div>
    </div>
  );
};

export default App;
