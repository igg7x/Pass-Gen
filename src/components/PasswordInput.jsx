import React from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { faRotateRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGenPassword from "../hooks/useGenPassword";

const PasswordInput = ({ password, setPass, values, length }) => {
  const handleCopyToClipBoard = () => {
    toast.success("Copy to Clipboard", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(password);
  };

  const handleResetPassword = () => {
    setPass(useGenPassword(values, length));
  };

  return (
    <div className="flex max-[650px]:flex-col justify-between items-center gap-5  w-[67.5%]  p-8 rounded-lg bg-white">
      <div className="flex flex-col w-full sm:w-auto">
        <input
          onChange={(e) => setPass(e.target.value)}
          value={password}
          type="text"
          className="outline-none  text-ellipsis min-[500px]:text-3xl text-2xl font-bold   w-full "
          id="password"
        />
        <hr />
      </div>
      <div
        style={{
          backgroundColor:
            length < 10
              ? "red"
              : length < 20
              ? "yellowgreen"
              : length < 30
              ? "green"
              : "blue",
        }}
        className="bg-blue-600 rounded-lg py-4 px-5">
        <h3 className="font-extrabold text-white text-2xl ">
          {length < 10
            ? "Weak"
            : length < 20
            ? "Medium"
            : length < 30
            ? "Strong"
            : "Very Strong"}
        </h3>
      </div>

      <div className="flex gap-4  font-normal   ">
        <button onClick={handleCopyToClipBoard}>
          <MemoizedFontAwesomeIcon icon={faCopy} size={"2xl"} />
        </button>
        <button onClick={handleResetPassword}>
          <MemoizedFontAwesomeIcon icon={faRotateRight} size={"2xl"} />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
