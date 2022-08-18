import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavnarMain() {
  return (
    <div className="w-full h-[92px] flex flex-row absolute  justify-between    ">
      <Link to="/">
        <img
          className=" ml-5 w-[350px] h-[82px]  object-cover "
          src={require("../../../src/İmages/logo2.png")}
        />
      </Link>
      <div className="text-[#d8e0e8] font-bold  flex flex-row justify-center text-justfiy items-center pr-12 h-full">
        <p className="hover:text-[#fefefe] ml-6">SING IN</p>
        <p className="hover:text-[#fefefe] ml-6">CREATE ACCOUNT</p>
        <Link className="hover:text-[#fefefe] ml-6" to="/films">
          FILMS
        </Link>
        <Link className="hover:text-[#fefefe] ml-6" to="/lists">
          LIST
        </Link>
        <Link className="hover:text-[#fefefe] ml-6" to="/journal">
          JOURNAL
        </Link>
      </div>
    </div>
  );
}

export default NavnarMain;
