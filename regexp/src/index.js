const formatThousands = (string) => {
  return `${string}`.replace(/(?!^)(?=(\d{3})+$)/g, ",");
};

export { formatThousands };
