import React, { useRef } from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const PasswordConfig = ({ values, setValues, length, setLength }) => {
  const handleLengthChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === "minus") {
      if (length === 4) return;
      setLength((prev) => prev - 1);
    } else if (e.target.id === "plus") {
      if (length === 50) return;
      setLength((prev) => prev + 1);
    }
  };

  return (
    <div className=" rounded-lg  gap-7 flex-col items-center justify-center flex p-8 w-[67.5%]  bg-white">
      <div className="flex flex-wrap  gap-5 max-[800px]:flex-col ">
        <div>
          <label htmlFor="length" className=" text-2xl font-extrabold">
            Password Length :
          </label>
          <span className="font-bold text-3xl">{length}</span>
        </div>
        <div className="flex gap-3">
          <button
            id="minus"
            onClick={handleLengthChange}
            className="rounded-full  border-2 border-blue-500 p-1"></button>
          <input
            onChange={(e) => setLength(e.target.value)}
            type="range"
            min="4"
            step={"1"}
            max="50"
            value={length}
            id="length"
          />
          <button
            id="plus"
            onClick={handleLengthChange}
            className="rounded-full  border-2 border-blue-500 p-1"></button>
        </div>
      </div>
      <div className="flex font-extrabold  items-center flex-wrap text-xl gap-5 ">
        <h3 className="text-2xl">Characters Used:</h3>
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked={values.uppercase}
            onChange={setValues}
            id="uppercase"
            disabled={
              !values.lowercase && !values.numbers && !values.symbols
                ? true
                : false
            }
          />
          <label htmlFor="uppercase">ABC</label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked={values.lowercase}
            onChange={setValues}
            id="lowercase"
            disabled={
              !values.uppercase && !values.numbers && !values.symbols
                ? true
                : false
            }
          />
          <label htmlFor="lowercase">abc</label>
        </div>

        <div className="flex  gap-2">
          <input
            type="checkbox"
            defaultChecked={values.numbers}
            onChange={setValues}
            id="numbers"
            disabled={
              !values.uppercase && !values.lowercase && !values.symbols
                ? true
                : false
            }
          />
          <label htmlFor="numbers">123 </label>
        </div>

        <div className="flex  gap-2">
          <input
            type="checkbox"
            defaultChecked={values.symbols}
            onChange={setValues}
            id="symbols"
            disabled={
              !values.uppercase && !values.lowercase && !values.numbers
                ? true
                : false
            }
          />
          <label htmlFor="symbols">#!&</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordConfig;
