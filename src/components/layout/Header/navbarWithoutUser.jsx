import { Link } from "react-router-dom";
import logo from "../../../assets/images/logoo.png";

function NavbarWithoutUser() {
  return (
    <header className="fixed top-0 z-40 flex w-full items-center justify-between bg-gradient-to-b from-black/90 to-transparent px-4 py-3 md:px-10">
      <Link to="/" className="flex items-center gap-3">
        <img className="h-16 w-auto md:h-20" src={logo} alt="Nflix Nepal" />
      </Link>
      <Link
        to="/signin"
        className="rounded-sm bg-red-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-900"
      >
        Sign In
      </Link>
    </header>
  );
}

export default NavbarWithoutUser;
