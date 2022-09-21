import React, { useState, createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../store/slices/loginSlice";

function CreateModal(props) {
  const isLoginValue = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  // usestate kısmı
  const [showModal, setShowModal] = useState(props.modal);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setalert] = useState("invisible");

  function isLoginFunction() {
    if (userName.length > 0 && password.length > 4) {
      return (
        console.log("aboo"),
        localStorage.setItem("userName", userName),
        localStorage.setItem("password", password),
        localStorage.setItem("isLogin", true),
        dispatch(isLogin(true)),
        setShowModal(false)
      );
    } else {
      setalert("visible");
    }
  }

  return (
    <div>
      <>
        {/* <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button> */}
        {showModal ? (
          <>
            <div className=" justify-start ml-3 sm:ml-0 sm:justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 sm:mx-auto max-w-[30rem]  ">
                {/*content*/}
                <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-[#445566] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl text-[#768798] font-semibold">
                      JOIN LETTERBOXD
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-col items-center justify-center">
                    <div className="flex flex-col mx-6 mb-4">
                      <p className="text-[#dadee0] font-semibold pb-1">
                        Username
                      </p>
                      <input
                        className="w-[250px] text-black h-[40px] bg-[#ccddee] rounded-lg focus:bg-slate-100 pl-2"
                        onChange={(e) => setUserName(e.target.value)}
                      ></input>
                    </div>
                    <div className="flex flex-col mx-6 ">
                      <p className="text-[#dadee0] font-semibold pb-1">
                        Password
                      </p>
                      <input
                        type="password"
                        className="w-[250px] text-black  h-[40px] bg-[#ccddee] rounded-lg focus:bg-slate-100 pl-2"
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>

                      <p className={` pt-4 text-[#e00c0c] ${alert} `}>
                        Şifreniz en az 5 haneli olmalıdır !
                      </p>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-[#e00c0c] ml-6 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#00b020] mr-6 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={isLoginFunction}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default CreateModal;
