const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 h-[80px] lg:h-[100px] px-4  md:pl-[40px] lg:pl-[80px] md:pr-[40px] lg:pr-[80px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className=" text-black text-2xl font-medium cursor-pointer hidden md:block">
          Course Club_
        </a>
      </div>
      <div className="navbar-center hidden z-20 lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg">Home</a>
          </li>
          <li>
            <a className="text-lg">About</a>
          </li>
          <li>
            <a className="text-lg">Contact</a>
          </li>
          <li>
            <a className="text-lg">Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 duration-200">
          JOIN Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
