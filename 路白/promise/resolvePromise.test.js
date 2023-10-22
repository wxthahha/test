// typeError
// const promise2 = new Promise((resolve) => resolve(1)).then((value) => {
//   return promise2;
// });

const promise2 = new Promise((resolve) => resolve(1)).then((value) => {
  return new Promise(() => {});
});
