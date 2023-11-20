import "./App.css";
import { createContext, useState } from "react";
import Main from "./Components/Main";
import NavBar from "./Components/Navbar/Navbar";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar/>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;