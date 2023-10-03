import React, { useState, useEffect, useRef } from "react";
import PasswordInput from "./PasswordInput";
import PasswordConfig from "./PasswordConfig";
import useGenPassword from "../hooks/useGenPassword";
const PasswordGeneratorContainer = () => {
  const [configValues, setConfigValues] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const [passwordLength, setPasswordLength] = useState(15);

  const handleConfigChange = (e) => {
    setConfigValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked,
      };
    });
  };

  const password = useRef(useGenPassword(configValues, passwordLength));
  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  return (
    <div className=" w-screen bg-[#Caedf7]">
      <div className="flex flex-col justify-center  gap-5 h-screen items-center">
        <h1 className=" text-center font-extrabold text-4xl">
          Password Generator
        </h1>
        <PasswordInput password={password} />
        <PasswordConfig
          values={configValues}
          length={passwordLength}
          setLength={handlePasswordLengthChange}
          setValues={handleConfigChange}
        />
      </div>
    </div>
  );
};

export default PasswordGeneratorContainer;
