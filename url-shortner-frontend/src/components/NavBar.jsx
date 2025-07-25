import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import Button from "@mui/material/Button";

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const[navbarOpen, setNavbarOpen] = useState(false);
  const path = useLocation().pathname;

  const onLogOutHandler =() =>{
    setToken(null);
    localStorage.removeItem("JWT_TOKE");
    navigate("/login")
  };

  const linkStyle = (toPath) =>
    path === toPath
      ? "text-black font-bold"
      : "text-black font-bold hover:text-white transition-all";

  return (
    <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md flex items-center justify-between px-8 sticky top-0 z-50">
      <Link to="/">
        <h1 className="font-bold text-3xl text-white italic">Linklytics</h1>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/about" className={linkStyle("/about")}>About</Link>
        {token && (
          <Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link>
        )}
        {!token && (
          <Link
            to="/register"
            className="bg-rose-700 text-white px-4 py-1 rounded-md font-bold hover:bg-rose-800 transition-all"
          >
            SignUp
          </Link>
        )}

        {token && (
          <button onClick={onLogOutHandler} className="bg-rose-700 text-white px-4 py-1 rounded-md font-bold hover:bg-rose-800 transition-all">
            Logout
          </button>
        )}

      </div>
    </div>
  );
};

export default NavBar;
