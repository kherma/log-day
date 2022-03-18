import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => (
  <header>
    <Link href="/">
      <a>DayLog</a>
    </Link>
    <ThemeSwitch />
  </header>
);

export default Header;
