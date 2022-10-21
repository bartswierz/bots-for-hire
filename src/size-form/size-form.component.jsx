import "./size-form.styles.scss";
import { useState } from "react";

export const SizeForm = (props) => {
  // console.log("props: ", props);
  const [size, setSize] = useState(0);
  // console.log("users state: ", setUsers(5));

  const handleSubmit = (event) => {
    // setSize(buildSize);
    event.preventDefault();
    fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
      .then((response) => response.json())
      .then((data) => props.setUsers(data));

    console.log("test", event.target.value);
  };

  const handleSize = (event) => {
    const newSize = event.target.value;

    // Input between 1-8 else set to 30
    newSize <= 4 && newSize >= 1 ? setSize(newSize) : setSize(4);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="size-form">
        <label>
          {/* First Name: */}
          {/* <input type="text" name="bots" placeholder="Number of Bots" onChange={buildSize} value={number} /> */}
          {/* <input type="text" name="bots" placeholder="Number of Bots" onChange={handleSize} /> */}
          <input type="text" name="bots" placeholder="Number of Bots (Max: 4)" onChange={handleSize} className="display-input" />
        </label>
        <button type="submit" value="Submit" className="submit-btn">
          Limit Bots Displayed
        </button>
      </form>
    </div>
  );
};

export default SizeForm;
