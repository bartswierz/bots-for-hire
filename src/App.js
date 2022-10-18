import "./App.css";
import { useState, useEffect } from "react";

import Button from "./components/button/button.component";
import List from "./components/list/list.component";
import GreetForm from "./components/greet-form/greet-form.component";
import Jokes from "./components/jokes/jokes.component";
import { FetchButton } from "./components/fetch-button/fetch-button.component";

const myArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

//when we click the fetch button, we want to make a Fetch() request to the API endpoint

const App = () => {
  //using array because we will store an ARRAY OF OBJECTS
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    // alert("inside handle click");
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        console.log("Users: ", users);
      });
    // .then((data) => console.log(data));
  };

  return (
    <div>
      <FetchButton text="Fetch Random" onClick={() => handleClick} />
    </div>
  );
};

export default App;

// EXCERCISE #1
// const App = () => {
//   return (
//     <div class="app-container">
//       <span class="text">Hello, World!</span>
//     </div>
//   );
// };

//App.css contents
// .app-container {
//   margin: 0 auto;
//   width: 20rem;
//   height: 20rem;
//   background-color: #2653b3;

//   /* centers text in container */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

/**********************************************/

//EXCERCISE #2
// const handleClick = () => {
//   alert("Button Clicked!");
// };

// const App = () => {
//   return (
//     <div class="app-container">
//       <button class="text" onClick={() => handleClick()}>
//         Hello, World!
//       </button>
//     </div>
//   );
// };

/**********************************************/

//EXCERCISE #3
// const App = () => {
//   return (
//     <div className="app-container">
//       <Button name="Button 1" name2="test" />
//       <Button name="Button 2" />
//       <Button name="Button 3" />
//     </div>
//   );
// };

//button.component
// const handleClick = (name) => {
//   alert(`You clicked on ${name}`);
// };

// const Button = ({ name }) => {
//   // console.log("name: ", name);
//   console.log("name: ", name);
//   return (
//     <button
//       className="text"
//       onClick={() => {
//         handleClick(name);
//       }}
//     >
//       {name}
//     </button>
//   );
// };

// export default Button;

/**********************************************/

//EXCERCISE #4
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="counter-container">
//       <h4>Button has been clicked: {counter} times</h4>
//       <button onClick={() => setCounter(counter + 1)}>Click Me</button>
//     </div>
//   );
// };

/**********************************************/

//EXCERCISE #5
// const myArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

// const App = () => {
//   return <List myList={myArray} />;
// };

//List component contents
// export const List = ({ myList }) => {
//   const newList = myList.map((item) => <li key={item}>{item}</li>);

//   return <ul>{newList}</ul>;
// };
/**********************************************/

//EXCERCISE #6
// import "./list.styles.css";

// export const List = ({ myList }) => {
//   // console.log("MyList", myList);
//   //Turning each elemnt from 'dog' to <li>dog</li>
//   const newList = myList.map((item) => (
//     <div className="list-item" key={item}>
//       <li>🐶 {item}</li>
//     </div>
//   ));

//   //Returning our newly created unorder list
//   return <ul>{newList}</ul>;
// };

//List.styles.css
// .list-item {
//   list-style: none;
//   border: 1px solid #777;
//   width: 100px;
//   padding: 10px 5px 10px 25px;
// }
/**********************************************/

//EXCERCISE 7
// const App = () => {
//   return <GreetForm />;
// };

//GREET FORM CONTENTS
// import "./greet-form.styles.css";
// import { useState } from "react";

// export const GreetForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleSubmit = (event) => {
//     // console.log("event: ", event);
//     // alert("Hello ", event.target.value, "!");
//     // console.log("firstName and lastName: ", firstName, lastName);
//     alert(`Hello ${firstName} ${lastName}!`);
//     event.preventDefault();
//   };

//   const onFirstChange = (event) => {
//     // console.log("first event: ", event);
//     const userFirstName = event.target.value;
//     // console.log("First name: ", userFirstName);
//     setFirstName(userFirstName);
//   };

//   const onLastChange = (event) => {
//     // console.log("last event: ", event);
//     const userLastName = event.target.value;
//     // console.log("last name: ", userLastName);
//     setLastName(userLastName);
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit} className="greet-form">
//         <label>
//           <input type="text" name="firstname" placeholder="First name" onChange={onFirstChange} value={firstName} />
//         </label>
//         <label>
//           <input type="text" name="lastname" placeholder="Last name" onChange={onLastChange} value={lastName} />
//         </label>
//         <button type="submit" value="Submit" className="submit-btn">
//           Greet Me
//         </button>
//       </form>
//     </div>
//   );
// };

/**********************************************/

/**********************************************/
// const App = () => {
//   return (
//     <div className="app-container">
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//       Learn React
//     </a>
//   </header>
// </div>
