import "./theme-button.styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme.context";
// import sphere from "../../../images/sphere.jpg";
export const ThemeButton = (props) => {
  console.log("props.theme: ", props.onClick);
  const { theme } = useContext(ThemeContext);
  console.log("currentTheme: ", theme);

  const changeTheme = (newTheme) => {
    document.body.style.backgroundImage = newTheme;
    // document.theme;
  };
  document.body.style.backgroundColor = theme;

  return <button onClick={changeTheme("sphere")}>Change Theme Sphere</button>;
};

export default ThemeButton;
