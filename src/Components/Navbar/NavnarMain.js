import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateModal from "../Modals/CreateModal";
import { isLogin } from "../../store/slices/loginSlice";
import { useSelector, useDispatch } from "react-redux";

function NavnarMain() {
  const isLoginValue = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const [modal, setmodal] = useState(false);

  const isLoginFunction = () => {
    {
      isLoginValue
        ? dispatch(isLogin(false)) && localStorage.removeItem("isLogin")
        : setmodal(!modal);
    }
  };

  return (
    <div className="w-full h-[92px] flex flex-row absolute z-10  justify-between    ">
      <Link to="/">
        <img
          className=" ml-5 w-[350px] h-[82px]  object-cover "
          src={require("../../../src/images/logo2.png")}
        />
      </Link>
      <div className="text-[#d8e0e8] font-bold  flex flex-row justify-center text-justfiy items-center pr-12 h-full">
        {isLoginValue && (
          <Link to="/profile" className="hover:text-[#fefefe] ml-6">
            PROFİLE
          </Link>
        )}

        <button onClick={isLoginFunction} className="hover:text-[#fefefe] ml-6">
          {isLoginValue ? "LOGOUT" : "LOGİN"}
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
        {modal && <CreateModal modal={modal} />}
      </div>
    </div>
  );
}

export default NavnarMain;
