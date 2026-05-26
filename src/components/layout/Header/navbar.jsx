import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../context/userContext";
import logo from "../../../assets/images/logo.png";

const links = [
  { to: "/home", label: "Home" },
  { to: "/series", label: "Series" },
  { to: "/search", label: "Search" },
  { to: "/mylist", label: "My List" },
  { to: "/liked", label: "Liked" },
  { to: "/history", label: "History" },
];

function Navbar() {
  const { User } = useContext(AuthContext);

  return (
    <header className="fixed top-0 z-40 flex w-full items-center justify-between bg-gradient-to-b from-black/90 to-black/20 px-3 py-3 backdrop-blur-sm md:px-8">
      <div className="flex min-w-0 items-center gap-4">
        <Link to="/home" className="shrink-0">
          <img className="h-7 w-auto md:h-9" src={logo} alt="Nflix Nepal" />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-white" : "text-neutral-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <Link to="/profile" className="flex shrink-0 items-center gap-2">
        <span className="hidden max-w-36 truncate text-sm text-white sm:block">
          {User?.displayName || User?.email || "Profile"}
        </span>
        <img
          className="h-8 w-8 rounded object-cover"
          src={
            User?.photoURL ||
            "https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
          }
          alt="Profile"
        />
      </Link>
    </header>
  );
}

export default Navbar;
