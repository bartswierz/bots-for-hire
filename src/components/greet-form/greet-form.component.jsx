import "./greet-form.styles.css";
import { useState } from "react";

export const GreetForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    // console.log("event: ", event);
    // alert("Hello ", event.target.value, "!");
    // console.log("firstName and lastName: ", firstName, lastName);
    alert(`Hello ${firstName} ${lastName}!`);
    event.preventDefault();
  };

  const onFirstChange = (event) => {
    // console.log("first event: ", event);
    const userFirstName = event.target.value;
    // console.log("First name: ", userFirstName);
    setFirstName(userFirstName);
  };

  const onLastChange = (event) => {
    // console.log("last event: ", event);
    const userLastName = event.target.value;
    // console.log("last name: ", userLastName);
    setLastName(userLastName);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="greet-form">
        <label>
          {/* First Name: */}
          <input type="text" name="firstname" placeholder="First name" onChange={onFirstChange} value={firstName} />
        </label>
        <label>
          <input type="text" name="lastname" placeholder="Last name" onChange={onLastChange} value={lastName} />
        </label>
        <button type="submit" value="Submit" className="submit-btn">
          Greet Me
        </button>
      </form>
    </div>
  );
};

export default GreetForm;
