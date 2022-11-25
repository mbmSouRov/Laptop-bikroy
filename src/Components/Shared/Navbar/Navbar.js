import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-200 sticky top-0 z-50 flex justify-around">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex justify-center items-center p-2 gap-2"
        >
          <p className="text-3xl text-primary font-bold">
            Laptop <span className="text-secondary">Bikroy</span>{" "}
          </p>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-1 uppercase rounded-lg text-accent-content">
          {menuItems}
        </ul>
      </div>
      <div className="">
        {user?.uid ? (
          <Link
            onClick={handleLogOut}
            to="/"
            className="btn btn-primary text-secondary"
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary text-secondary">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
