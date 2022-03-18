import Link from "next/link";
import Logo from "../Logo/Logo";
import { BsBarChartLineFill } from "react-icons/bs";

const Navbar = () => (
  <nav className="flex justify-between items-center mr-4 sm:mr-8">
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <Link href="/reports">
      <a aria-label="Go to reports page">
        <BsBarChartLineFill className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
    </Link>
  </nav>
);

export default Navbar;
