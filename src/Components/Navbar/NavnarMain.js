import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateModal from "../Modals/CreateModal";

function NavnarMain() {
  const [deneme, setdeneme] = useState(false);
  return (
    <div className="w-full h-[92px] flex flex-row absolute z-10  justify-between    ">
      <Link to="/">
        <img
          className=" ml-5 w-[350px] h-[82px]  object-cover "
          src={require("../../../src/images/logo2.png")}
        />
      </Link>
      <div className="text-[#d8e0e8] font-bold  flex flex-row justify-center text-justfiy items-center pr-12 h-full">
        <button className="hover:text-[#fefefe] ml-6">SING IN</button>

        <button
          onClick={() => setdeneme(!deneme)}
          className="hover:text-[#fefefe] ml-6"
        >
          CREATE ACCOUNT
        </button>

        <Link className="hover:text-[#fefefe] ml-6" to="/films">
          FILMS
        </Link>
        <Link className="hover:text-[#fefefe] ml-6" to="/lists">
          LIST
        </Link>
        <Link className="hover:text-[#fefefe] ml-6" to="/journal">
          JOURNAL
        </Link>
        {deneme && <CreateModal deneme={deneme} />}
      </div>
    </div>
  );
}

export default NavnarMain;
