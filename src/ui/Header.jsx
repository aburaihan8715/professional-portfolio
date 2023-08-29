import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  // console.log(path);
  // menu
  const menus = (
    <>
      <li>
        {path === "/" ? (
          <a href="#hero" className="text-xl capitalize ">
            home
          </a>
        ) : (
          <Link to="/" className="text-xl capitalize ">
            home
          </Link>
        )}
      </li>

      {path === "/" && (
        <>
          <li>
            <a href="#about" className="text-xl capitalize ">
              about
            </a>
          </li>
          <li>
            <a href="#projects" className="text-xl capitalize ">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl capitalize ">
              contact
            </a>
          </li>
        </>
      )}

      <li>
        <Link className="text-xl capitalize " to={`/blogs`}>
          blogs
        </Link>
      </li>
    </>
  );

  return (
    <header className="bg-base-200 fixed h-20 top-0 left-0 right-0 z-30 border border-b-slate-500">
      <div className="w-full sm:max-w-6xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {menus}
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl">
              <img className="w-20" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ml-auto">
            <ul className="menu menu-horizontal px-1">{menus}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
