const after = (n, func) => {
  if (typeof func !== "function") {
    throw TypeError("needed function");
  }
  n = n || 0;
  return function (...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
};

export default after;
