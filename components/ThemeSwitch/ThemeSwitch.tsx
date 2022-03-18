import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const setTheme = (theme: string): void => {
    localStorage.setItem("dayLogTheme", theme);
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(theme === "dark" ? true : false);
  };

  useEffect(() => {
    const getThemeFromLocalStorage = localStorage.getItem("dayLogTheme");
    !getThemeFromLocalStorage || getThemeFromLocalStorage === "light"
      ? setTheme("light")
      : setTheme("dark");
  }, []);
  return (
    <button onClick={() => setTheme(darkMode ? "light" : "dark")}>
      Change Theme
    </button>
  );
};

export default ThemeSwitch;
