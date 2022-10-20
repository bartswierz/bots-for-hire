import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./contexts/theme.context";
import Theme from "./components/buttons/theme/theme-button.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

/*
Context Provider HOLDS OUR STATE, and ALLOWS ACCESS TO OUR NESTED COMPONENTS

<ThemeProvider value={"./images/matrix.jpg"}>
  <App />
</ThemeProvider>

Only the App Component will have access to the ThemeProvider, everything else OUTSIDE will NOT.
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
