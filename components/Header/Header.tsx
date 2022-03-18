import Navbar from "../Navbar/Navbar";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => (
  <header className="grid grid-cols-[1fr,auto] py-2 px-4 dark:text-white dark:bg-black border-b border-b-black dark:border-b-white transition-colors duration-300 ease-in-out sm:py-4 sm:px-8">
    <Navbar />
    <ThemeSwitch />
  </header>
);

export default Header;
