import isSymbol from "./isSymbol";

const symbolToString = Symbol.prototype.toString;

const INFINITY = 1 / 0;

const baseToString = (value) => {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(baseToString);
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  const result = `${value}`;
  return result === "0" && 1 / value === -INFINITY ? "-0" : result;
};

export default baseToString;
