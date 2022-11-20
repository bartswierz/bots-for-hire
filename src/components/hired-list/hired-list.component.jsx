import "./hired-list.styles.scss";
import { HiredContext } from "../../contexts/hired.context";
import { useContext } from "react";

export const HiredList = ({ users }) => {
  const { hiredList } = useContext(HiredContext);
  console.log("In hiredList: ", hiredList);

  return (
    <div className="hired-container">
      {/* Deconstructing user for readability */}
      {hiredList.map(({ id, first_name, last_name }) => {
        // return <div>{user}</div>;
        return (
          <div key={id} className="hired-text">
            {first_name} {last_name} {id}
          </div>
        );
      })}
    </div>
  );
};

export default HiredList;
