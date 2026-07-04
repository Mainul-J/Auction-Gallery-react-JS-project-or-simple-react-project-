import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="mx-auto w-10/12">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Auction</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to Works</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-blue-300">
            Auction <span className="text-amber-300">Gallery</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auction</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to Works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-5">
          <CiBellOn size={30}/>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-xs">UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
