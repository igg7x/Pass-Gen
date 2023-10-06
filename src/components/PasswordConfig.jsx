import React from "react";

const PasswordConfig = ({ values, setValues, length, setLength }) => {
  // const handleLengthChange = (e) => {
  //   e.preventDefault();
  //   if (e.target.id === "minus") {
  //     if (length === 4) return;
  //     setLength((prev) => prev - 1);
  //   } else if (e.target.id === "plus") {
  //     if (length === 50) return;
  //     setLength((prev) => prev + 1);
  //   }
  // };

  const handleDecrement = () => {
    if (length === 4) return;
    setLength((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (length === 50) return;
    setLength((prev) => prev + 1);
  };

  return (
    <div className=" rounded-lg  gap-5 flex-col items-center justify-center flex p-5 w-[67.5%]  bg-white">
      <label htmlFor="length" className=" text-2xl font-bold">
        Characters :{" "}
        <span className="text-3xl  font-medium text-cyan-900 ">{length}</span>
      </label>

      <div className="flex w-[50%]  items-center justify-center gap-5 ">
        <button
          id="minus"
          onClick={handleDecrement}
          className="font-extralight   text-5xl ">
          -
        </button>
        <input
          onChange={(e) => setLength(e.target.value)}
          type="range"
          min="4"
          step={"1"}
          max="50"
          value={length}
          id="length"
          className=" w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <button
          id="plus"
          onClick={handleIncrement}
          className="font-extralight   text-5xl ">
          +
        </button>
      </div>
      <div className="flex font-bold  justify-between  items-center flex-wrap text-xl gap-5 ">
        <div className="flex gap-2 ">
          <input
            className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
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
            className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
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
            className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
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
            className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-6 h-6"
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
