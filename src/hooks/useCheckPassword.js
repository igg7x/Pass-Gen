import { EVALUATIONS } from "../constants/constants";

export const useCheckPassword = (password) => {
  let score = 0;
  //   let chars = "";

  if (password.match(/[a-z]+/)) {
    score += 1;
    // chars += "L";
  }
  if (password.match(/[A-Z]+/)) {
    score += 1;
    // chars += "U";npm
  }
  if (password.match(/[0-9]+/)) {
    score += 1;
    // chars += "N";
  }
  if (password.match(/[$@#&!]+/)) {
    score += 1;
    // chars += "S";
  }

  const strength = EVALUATIONS[score];
  //   const lenghtScore =
  //     password.length < 4
  //       ? EVALUATIONS[1]
  //       : password.length > 8
  //       ? EVALUATIONS[2]
  //       : password.length > 10
  //       ? EVALUATIONS[3]
  //       : EVALUATIONS[4];
  return { strength, score };
};
