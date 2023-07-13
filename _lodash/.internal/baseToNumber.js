import isSymbol from "./isSymbol";

const NAN = 0 / 0;

const baseToNumber = (value) => {
  if (typeof value === "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  return +value;
};

export default baseToNumber;
