import "./hired-list.styles.scss";
import { HiredContext } from "../../contexts/hired.context";
import { useContext } from "react";

// export const HiredList = ({ user }) => {
export const HiredList = () => {
  // Hired List holds our current list
  const { hiredList, hiredCount, removeHireFromList } = useContext(HiredContext);

  return (
    <div className="hired-container">
      <h1 className="hired-header">{hiredCount > 0 ? "Current Hires" : "No Hires"}</h1>
      {/* <h1 className="hired-header">{hiredCount === 0 ? "No Hires Yet" : `Number of Hires: ${hiredCount}`}</h1> */}
      {/* Deconstructing user for readability */}
      <div>
        {hiredList.map(({ id, first_name, last_name, avatar }) => {
          return (
            <div key={id}>
              <div className="hired-text">
                {first_name} {last_name} <img src={avatar} className="hired-avatar" alt="Employee"></img>
                <div className="remove-btn">
                  <ion-icon onClick={() => removeHireFromList(id)} name="trash-outline"></ion-icon>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HiredList;
