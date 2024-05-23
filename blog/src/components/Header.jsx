import { NavLink } from "react-router-dom";

const Header = () => {
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/editor", link: "Editor" },
    { path: "/signin", link: "SignIn" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-teal-800">
      <nav className="px-4 py-4">
        <a href="/" className="text-xl font-bold text-white">
          Bloggy<span className="text-orange-500">BG</span>
        </a>

        {/* Nav items */}
        <ul>
          {navItems.map(({ path, link }) => (
            <li className="text-white">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
