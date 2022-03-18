import Navbar from "../Navbar/Navbar";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => (
  <header className="grid grid-cols-[1fr,auto] py-2 px-4 w-full dark:text-white bg-white dark:bg-black shadow-lg transition-colors duration-300 ease-in-out sm:py-4 sm:px-8">
    <Navbar />
    <ThemeSwitch />
  </header>
);

export default Header;
