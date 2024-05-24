import { NavLink } from "react-router-dom";
import { FaDribbble, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/editor", link: "Editor" },
    { path: "/contact", link: "Contact" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNavItems = navItems.filter((item) =>
    item.link.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-black text-white sticky top-0 left-0 right-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white hover:opacity-75">
          Bloggy<span className="text-blue-600">BG</span>
        </a>

        {/* Nav items */}
        <ul className="md:flex gap-12 text-lg">
          {navItems.map(({ path, link }, index) => (
            <li key={index} className="text-white hover:opacity-80">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {searchTerm && (
            <div className="absolute bg-gray-800 text-white rounded-md mt-2 w-full">
              {filteredNavItems.map(({ path, link }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {link}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a
            className=" text-white hover:text-blue-600 active:text-blue-600"
            href="https://www.google.com/"
          >
            <FaDribbble />
          </a>
          <a
            className=" text-white hover:text-blue-600 active:text-blue-600"
            href="https://www.instagram.com/"
          >
            <FaInstagram />
          </a>
          <a
            className=" text-white hover:text-blue-600 active:text-blue-600"
            href="https://twitter.com/"
          >
            <FaXTwitter />
          </a>
          <button className="bg-blue-600 px-6 py-2 font-medium rounded hover:bg-white hover:text-blue-600 transition-all duration-200 ease-in">
            <a href="/signin">Sign In</a>
          </button>
        </div>
        {/* mobile menue button mobile screen */}
      </nav>
    </header>
  );
};

export default Header;
