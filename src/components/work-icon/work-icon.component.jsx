import { useState, useContext } from "react";
import { HiredContext } from "../../contexts/hired.context";
import "./work-icon.styles.scss";

export const WorkIcon = () => {
  const { hiredCount } = useContext(HiredContext);

  return (
    <div className="work-icon-container">
      <div>
        <ion-icon className="work-icon" name="clipboard-outline" size="large" color="light"></ion-icon>
      </div>
      <span className="work-count">{hiredCount}</span>
    </div>
  );
};

export default WorkIcon;
