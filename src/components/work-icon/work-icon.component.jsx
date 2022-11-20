import { useState } from "react";
import "./work-icon.styles.scss";

export const WorkIcon = () => {
  // Will display bookmarkCount in future
  // return <button>0</button>;

  // const [isSaveClicked, setIsSaveClicked] = useState(false);

  //On click render bookmarkList / remove hiredList
  const handleClick = () => {};

  return (
    <div className="work-icon-container">
      <div onClick={handleClick}>
        <ion-icon className="work-icon" name="clipboard-outline" size="large"></ion-icon>
      </div>
      <span className="work-count">0</span>
    </div>
  );
};

export default WorkIcon;
