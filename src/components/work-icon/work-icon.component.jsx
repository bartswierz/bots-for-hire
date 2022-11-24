import { useState, useContext } from "react";
import { HiredContext } from "../../contexts/hired.context";
import { BookmarkContext } from "../../contexts/bookmark.context";
import "./work-icon.styles.scss";

export const WorkIcon = () => {
  const { hiredCount, toggleHireList } = useContext(HiredContext);

  ////Click on Work icon displays/hides Hire list in sidebar
  const handleHire = () => {
    toggleHireList();
  };

  return (
    <div className="work-icon-container" onClick={handleHire}>
      <div className="icon-container">
        <ion-icon className="work-icon" name="clipboard-outline" size="large" color="light"></ion-icon>
      </div>
      <span className="work-count">{hiredCount}</span>
    </div>
  );
};

export default WorkIcon;
