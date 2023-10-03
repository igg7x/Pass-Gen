import React, { useState, useEffect, useRef } from "react";
import PasswordInput from "./PasswordInput";
import PasswordConfig from "./PasswordConfig";
import useGenPassword from "../hooks/useGenPassword";
const PasswordGeneratorContainer = () => {
  const [configValues, setConfigValues] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const [passwordLength, setPasswordLength] = useState(15);
  const [password, setPassword] = useState(
    useGenPassword(configValues, passwordLength)
  );
  // const password = useRef(useGenPassword(configValues, passwordLength));

  const handleConfigChange = (e) => {
    setConfigValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked,
      };
    });
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  useEffect(() => {
    setPassword(useGenPassword(configValues, passwordLength));
    // password.current = useGenPassword(configValues, passwordLength);
  }, [configValues, passwordLength]);

  return (
    <div className="flex flex-col items-center p-2 min-[478px]:justify-center gap-5  max-[480px]:h-full  h-screen bg-[#Caedf7]">
      <h1 className=" text-center font-extrabold  max-[478px]:text-4xl  text-5xl ">
        Password Generator
      </h1>
      <PasswordInput
        password={password}
        values={configValues}
        length={passwordLength}
        setPass={setPassword}
      />
      <PasswordConfig
        values={configValues}
        length={passwordLength}
        setLength={handlePasswordLengthChange}
        setValues={handleConfigChange}
      />
    </div>
  );
};

export default PasswordGeneratorContainer;
