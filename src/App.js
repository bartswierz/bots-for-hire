import "./App.css";
import { useState, useEffect, useContext } from "react";

import sphere from "./images/sphere.jpg";
import matrix from "./images/matrix.jpg";
import warpspeed from "./images/warpspeed.jpg";

import Cards from "./components/cards/cards.component";
import SizeForm from "./size-form/size-form.component";

const App = () => {
  //Store user info from API
  const [users, setUsers] = useState([]);

  // Run effect, will run once to fetch and populate our cards
  useEffect(() => {
    console.log("INSIDE useEffect");
    fetch("https://random-data-api.com/api/users/random_user?size=4")
      .then((response) => response.json())
      .then((userInfo) => {
        setUsers(userInfo);
        console.log("userInfo: ", userInfo);
      });
  }, []);

  // Fetch 10 New users to be rendered
  const handleClick = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=4")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  // const changeTheme = (color) => {
  //   switch (color) {
  //     case "red":
  //       return (document.body.style.backgroundColor = "blue");
  //     case "blue":
  //       return (document.body.style.backgroundColor = "green");
  //     case "green":
  //       return (document.body.style.backgroundColor = "red");
  //     default:
  //       alert("error color:", document.body.style.backgroundColor);
  //   }
  //   // document.body.style.backgroundColor;
  // };

  // const changeSize = (event) => {
  //   event.preventDefault();
  //   if (event.target.value > 100) event.target.value = 100;
  //   console.log("value: ", event.target.value);
  //   fetch(`https://random-data-api.com/api/users/random_user?size=${event.target.value}`)
  //     .then((response) => response.json())
  //     .then((userInfo) => setUsers(userInfo));
  // };

  // <label>
  //   <input type="text" name="firstname" placeholder="First name" onChange={onFirstChange} value={firstName} />
  // </label>;

  return (
    <div className="App">
      <div className="theme">
        {/* Passing setter to child */}
        <div className="button-container">
          <button className="fetch-btn" onClick={handleClick}>
            Find Bots
          </button>
        </div>
        <SizeForm setUsers={setUsers} />
        <Cards users={users} />
      </div>
    </div>
  );
};

export default App;

/*
 {/* <div style={background: url("../public/images/sphere.jpg")}></div> */
{
  /* <div style={{ backgroundImage: `url("../public/images/sphere.jpg")` }}> */
}
{
  /* <div style={{ backgroundImage: `url(${theme})` }} onClick={onClickHandler}> */
}

{
  /* <div className="theme" style={{ backgroundImage: `url(${theme})` }} onClick={onClickHandler}> */
}

// return (
//   <div>
//     <div className="theme" onClick={handleTheme}>
//       <div className="button-container">
//         <button className="fetch-btn" onClick={handleClick}>
//           Build Bots
//         </button>
//       </div>

//       <Cards users={users} />
//     </div>
//   </div>
// );

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
