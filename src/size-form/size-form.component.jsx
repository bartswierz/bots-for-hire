import "./size-form.styles.css";
import { useState } from "react";

export const SizeForm = (props) => {
  // console.log("props: ", props);
  const [size, setSize] = useState(0);
  // console.log("users state: ", setUsers(5));

  const handleSubmit = (event) => {
    // setSize(buildSize);
    event.preventDefault();
    // handleSize(event.target.value);
    // console.log("event: ", event);
    // console.log("event.target.value: ", event.target.value[0]);
    // alert(`Hello ${firstName} ${lastName}!`);
    // setSize(event.target.value);
    fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
      .then((response) => response.json())
      .then((data) => props.setUsers(data));

    console.log("test", event.target.value);
  };

  // const handleClick = () => {
  //   fetch("https://random-data-api.com/api/users/random_user?size=9")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // };
  const handleSize = (event) => {
    const newSize = event.target.value;

    // Input between 1-8 else set to 30
    newSize <= 8 && newSize > 1 ? setSize(newSize) : setSize(8);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="size-form">
        <label>
          {/* First Name: */}
          {/* <input type="text" name="bots" placeholder="Number of Bots" onChange={buildSize} value={number} /> */}
          {/* <input type="text" name="bots" placeholder="Number of Bots" onChange={handleSize} /> */}
          <input type="text" name="bots" placeholder="Number of Bots" onChange={handleSize} />
        </label>
        <button type="submit" value="Submit" className="submit-btn">
          Build Bots!
        </button>
      </form>
    </div>
  );
};

export default SizeForm;
