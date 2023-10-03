import React from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { faRotateRight, faCopy } from "@fortawesome/free-solid-svg-icons";
const PasswordInput = ({ password }) => {
  return (
    <div className="flex max-[400px]:flex-col justify-between items-center gap-5  w-[67%]  p-10 rounded-lg bg-white">
      <div className="flex flex-col w-full sm:w-auto">
        <input
          value={password.current}
          type="text"
          className="outline-none min-[500px]:text-3xl text-2xl font-bold   w-full "
          id="password"
        />
        <hr />
      </div>
      <div className="flex gap-4  font-normal    ">
        <button>
          <MemoizedFontAwesomeIcon icon={faCopy} size={"2xl"} />
        </button>
        <button>
          <MemoizedFontAwesomeIcon icon={faRotateRight} size={"2xl"} />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
