import Link from "next/link";
import Logo from "../Logo/Logo";

const Navbar = () => (
  <nav className="mr-4 sm:mr-8">
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  </nav>
);

export default Navbar;
