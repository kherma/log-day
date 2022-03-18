import { useState, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";

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
    <button
      aria-label={`Change theme to ${darkMode ? "light" : "dark"}`}
      onClick={() => setTheme(darkMode ? "light" : "dark")}
    >
      <CgDarkMode className="w-10 h-10 sm:w-12 sm:h-12" />
    </button>
  );
};

export default ThemeSwitch;
