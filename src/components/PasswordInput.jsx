import React from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { faRotateRight, faCopy } from "@fortawesome/free-solid-svg-icons";

import useGenPassword from "../hooks/useGenPassword";

const PasswordInput = ({ password, setPass, values, length }) => {
  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(password);
  };

  const handleResetPassword = () => {
    setPass(useGenPassword(values, length));
  };

  return (
    <div className="flex max-[400px]:flex-col justify-between items-center gap-5  w-[67%]  p-8 rounded-lg bg-white">
      <div className="flex flex-col w-full sm:w-auto">
        <input
          value={password}
          type="text"
          className="outline-none  min-[500px]:text-3xl text-2xl font-bold   w-full "
          id="password"
        />
        <hr />
      </div>
      <div className="flex gap-4  font-normal    ">
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
