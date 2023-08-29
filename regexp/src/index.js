const formatThousands = (string) => {
  return `${string}`.replace(/\B(?=(\d{3})+\b)/g, ",");
};

const format1 = (number) => {
  // 1888 => $ 1,888.00
  return parseFloat(number).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, "$ ");
};

export { formatThousands, format1 };
