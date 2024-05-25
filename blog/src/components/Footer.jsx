const Footer = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/editor", link: "Editor" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <footer className=" bottom-0 items-center justify-center bg-purple-900 text-white w-full pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600">
              Bloggy<span className="text-white">BG</span>
            </h3>
            <ul className="space-y-2">
              {navItems.map(({ path, link }, index) => (
                <li key={index}>
                  <a href={path} className="hover:text-blue-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600">
              Social Media
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="hover:text-blue-600 flex items-center"
                >
                  <i className="fab fa-facebook-f mr-2"></i>Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  className="hover:text-blue-600 flex items-center"
                >
                  <i className="fab fa-twitter mr-2"></i>Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="hover:text-blue-600 flex items-center"
                >
                  <i className="fab fa-instagram mr-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="animate-pulse">© 2023 Bloggy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
