import { useState, useContext } from "react";
import { HiredContext } from "../../contexts/hired.context";
import "./work-icon.styles.scss";

export const WorkIcon = () => {
  // Will display bookmarkCount in future
  // return <button>0</button>;

  // const [isSaveClicked, setIsSaveClicked] = useState(false);

  const { hiredCount } = useContext(HiredContext);

  //On click render bookmarkList / remove hiredList
  const handleClick = () => {};

  return (
    <div className="work-icon-container">
      <div onClick={handleClick}>
        <ion-icon className="work-icon" name="clipboard-outline" size="large" color="light"></ion-icon>
      </div>
      <span className="work-count">{hiredCount}</span>
    </div>
  );
};

export default WorkIcon;
