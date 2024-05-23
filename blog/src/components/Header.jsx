import { NavLink } from "react-router-dom";
import { FaDribbble, FaInstagram, FaBars, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/editor", link: "Editor" },
    { path: "/signin", link: "Sign In" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white hover:opacity-75">
          Bloggy<span className="text-orange-500">BG</span>
        </a>

        {/* Nav items */}
        <ul className="md:flex gap-12 text-lg hidden ">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-white hover:opacity-80">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a
            className=" text-white hover:text-orange-500 active:text-orange-500"
            href="/"
          >
            <FaDribbble />
          </a>
          <a
            className=" text-white hover:text-orange-500 active:text-orange-500"
            href="/"
          >
            <FaInstagram />
          </a>
          <a
            className=" text-white hover:text-orange-500 active:text-orange-500"
            href="/"
          >
            <FaXTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Sign In
          </button>
        </div>
        {/* mobile menue button mobile screen */}
        <div>
          <button>
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
