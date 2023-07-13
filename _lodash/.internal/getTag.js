const toString = Object.prototype.toString;

const getTag = (value) => {
  if (value == null) {
    return typeof value === "undefined"
      ? "[object Undefined]"
      : "[object Null]";
  }
  return toString.call(value);
};

export default getTag;
