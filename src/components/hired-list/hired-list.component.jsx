import "./hired-list.styles.scss";
import { HiredContext } from "../../contexts/hired.context";
import { useContext } from "react";

export const HiredList = ({ user }) => {
  // Hired List holds our current list
  const { hiredList, hiredCount, removeHireFromList } = useContext(HiredContext);
  // console.log("In hiredList: ", hiredList);

  // const removeHire = (id) => removeHireFromList(id);

  return (
    <div className="hired-container">
      {/* <h1 className="hired-header">Number of Hires: {hiredCount}</h1> */}
      <h1 className="hired-header">{hiredCount === 0 ? "No Hires Yet" : `Number of Hires: ${hiredCount}`}</h1>
      {/* Deconstructing user for readability */}
      <div>
        {hiredList.map(({ id, first_name, last_name, avatar }) => {
          // return <div>{user}</div>;
          return (
            // <div key={id} className="flex">
            <div key={id}>
              <div className="hired-text">
                {first_name} {last_name} {id} <img src={avatar} className="hired-avatar"></img>
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
