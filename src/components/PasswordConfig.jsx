import React from "react";
import MemoizedFontAwesomeIcon from "./MemoizedIcon";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const PasswordConfig = ({ values, setValues, length, setLength }) => {
  const handleLengthChange = (e) => {
    console.log(e);
    if (e.target.id === "plus") {
      setLength((prev) => prev + 1);
    } else {
      setLength((prev) => prev - 1);
    }
  };

  return (
    <div className=" rounded-lg  gap-7 flex-col items-center justify-center flex p-10 w-[67%]  bg-white">
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
            className="rounded-full  border-2 border-blue-500 p-1">
            {" "}
            <MemoizedFontAwesomeIcon icon={faMinus} size={"lg"} />
          </button>
          <input
            onChange={setLength}
            type="range"
            min="6"
            step={"1"}
            max="50"
            value={length}
            id="length"
          />
          <button
            id="plus"
            onClick={handleLengthChange}
            className="rounded-full  border-2 border-blue-500 p-1">
            <MemoizedFontAwesomeIcon icon={faPlus} size={"lg"} />
          </button>
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
          />
          <label htmlFor="uppercase">ABC</label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked={values.lowercase}
            onChange={setValues}
            id="lowercase"
          />
          <label htmlFor="lowercase">abc</label>
        </div>

        <div className="flex  gap-2">
          <input
            type="checkbox"
            defaultChecked={values.numbers}
            onChange={setValues}
            id="numbers"
          />
          <label htmlFor="numbers">123 </label>
        </div>

        <div className="flex  gap-2">
          <input
            type="checkbox"
            defaultChecked={values.symbols}
            onChange={setValues}
            id="symbols"
          />
          <label htmlFor="symbols">#!&</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordConfig;
