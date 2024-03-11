import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div
      className=" flex justify-between
     bg-black text-white p-4"
    >
      <h1>
        <Link to={"/"} className="font-bold text-yellow-500 text-2xl px-5 ">
          Forum
        </Link>
      </h1>
      <nav className="gap-4 flex items-center">
        <NavLink to={"/"}>Günderiler</NavLink>
        <NavLink to={"/create"}>Günderi Ekle</NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
