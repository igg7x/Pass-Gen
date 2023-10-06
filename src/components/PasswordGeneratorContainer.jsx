import React, { useState, useEffect, useRef } from "react";
import PasswordInput from "./PasswordInput";
import PasswordConfig from "./PasswordConfig";
import useGenPassword from "../hooks/useGenPassword";
import { ToastContainer } from "react-toastify";
import { useModal } from "../hooks/useModal";
import CheckPasswordModal from "./CheckPasswordModal";

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
  const { isShowing, toggle: toogleModal } = useModal();

  // const password = useRef(useGenPassword(configValues, passwordLength));

  const handleConfigChange = (e) => {
    setConfigValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked,
      };
    });
  };

  useEffect(() => {
    setPassword(useGenPassword(configValues, passwordLength));
    // password.current = useGenPassword(configValues, passwordLength);
  }, [configValues, passwordLength]);

  return (
    <div className="flex flex-col items-center p-1 justify-center gap-5   h-screen bg-gradient-to-t from-sky-500 to-cyan-100">
      <h1 className=" text-center max-[450px]:text-4xl font-extrabold  max-[375px]:text-2xl text-5xl ">
        Password Tool's
      </h1>
      <p className="font-bold text-xl text-cyan-700">
        Generate and Validate strong{" "}
        <strong className="text-slate-800">Passwords</strong> quickly
      </p>
      <ToastContainer />
      <CheckPasswordModal show={isShowing} onCloseModal={toogleModal} />
      <PasswordInput
        openModal={toogleModal}
        password={password}
        values={configValues}
        length={passwordLength}
        setPass={setPassword}
      />{" "}
      <PasswordConfig
        values={configValues}
        length={passwordLength}
        setLength={setPasswordLength}
        setValues={handleConfigChange}
      />
    </div>
  );
};

export default PasswordGeneratorContainer;
