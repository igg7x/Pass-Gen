import React, { useState } from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { faXmark, faLock } from "@fortawesome/free-solid-svg-icons";
import { useCheckPassword } from "../hooks/useCheckPassword";

const CheckPasswordModal = ({ show, onCloseModal }) => {
  if (!show) {
    return null;
  }
  const [passwordToValidate, setPasswordToValidate] = useState("");
  const [testResult, setTestResult] = useState({});
  const [errors, setErrors] = useState("");

  const handleValidate = () => {
    if (passwordToValidate == "") {
      setErrors("Please Enter a Password to validate");
    } else {
      setErrors("");
      setTestResult(useCheckPassword(passwordToValidate));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex items-center justify-center backdrop-blur-sm">
      <section className="w-[50%]  max-[800px]:w-[75%]   max-[300px]:gap-2  h-auto sm:w-[90%] md:w-[80%] absolute lg:w-[70%] xl:w-[60%]  bg-cyan-800 rounded-md p-4 flex flex-col  items-center gap-5">
        <button
          className="absolute top-0 text-white right-0 p-2"
          onClick={onCloseModal}>
          <MemoizedFontAwesomeIcon size="2xl" icon={faXmark} />
        </button>
        <h1 className="font-bold underline text-white text-2xl">
          Validate your Password
        </h1>
        <p className="font-bold text-lg text-cyan-200">
          We will evaluate your password based on a scoring system.
        </p>
        <p className="text-sm font-bold text-cyan-200">
          {" "}
          The scores are classified as follows : 1 = Week , 2 = Medium , 3 =
          Good , 4 = Strong
        </p>
        <input
          onChange={(e) => setPasswordToValidate(e.target.value)}
          value={passwordToValidate}
          type="text"
          className="outline-none  text-center rounded-md text-ellipsis min-[500px]:text-3xl text-2xl font-bold   w-[50%]
            "
        />
        <hr />
        {Object.keys(testResult).length !== 0 ? (
          <div className="bg-gray-700 p-3 rounded-md ">
            <h1 className="font-bold underline text-white text-2xl">Results</h1>
            <p className="font-bold text-cyan-200">
              Score : {testResult.score}
            </p>
            <p className="font-bold text-cyan-200">
              Type Characters Strength : {testResult.strength}
            </p>
          </div>
        ) : (
          ""
        )}
        <button
          onClick={handleValidate}
          type="submit"
          className="hover:bg-green-400 w-28 bg-black text-white rounded-md p-2">
          Validate
        </button>
        {errors && (
          <span className="text-red-600 font-light bg-black p-2 rounded-md">
            {errors}
          </span>
        )}
      </section>
    </div>
  );
};

export default CheckPasswordModal;
