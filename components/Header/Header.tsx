import Navbar from "../Navbar/Navbar";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => (
  <header className="py-2 px-4 dark:text-white bg-white dark:bg-black shadow-lg sm:py-4 sm:px-8">
    <div className="grid grid-cols-[1fr,auto] mx-auto max-w-layout">
      <Navbar />
      <ThemeSwitch />
    </div>
  </header>
);

export default Header;
