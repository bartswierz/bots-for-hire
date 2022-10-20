import "./alert-button.styles.css";

// // ALTERNATIVE 1 if we destructure name - Best because we destructered off name from props so instead of writing '{props.name}', we can write '{name}. This makes for MUCH MORE READABLE CODE WHEN WE SCALE
const handleClick = (name) => {
  alert(`You clicked on ${name}`);
};

export const Button = ({ name }) => {
  // console.log("name: ", name);
  console.log("name: ", name);
  return (
    <button
      className="text"
      onClick={() => {
        handleClick(name);
      }}
    >
      {name}
    </button>
  );
};

export default Button;

// // ALTERNATIVE 1 if we destructure name - Best because we destructered off name from props so instead of writing '{props.name}', we can write '{name}. This makes for MUCH MORE READABLE CODE WHEN WE SCALE
// const handleClick = (name) => {
//   alert(`You clicked on ${name}`);
// };

// const Button = ({name}) => {
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

// // ALTERNATIVE 2 passing simple 'props'. This makes for LESS READABLE CODE because it REQUIRES US to get name by doing 'props.name'
// const handleClick = (props) => {
//   alert(`You clicked on ${props.name}`);
// };

// const Button = (props) => {
//   console.log("props: ", props);
//   // console.log("name: ", name);
//   return (
//     <button
//       className="text"
//       onClick={() => {
//         handleClick(props);
//       }}
//     >
//       {props.name}
//     </button>
//   );
// };
