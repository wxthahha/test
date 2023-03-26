/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-03-19 15:14:14
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-03-19 16:28:00
 * @Description: Promise.all
 */
Promise.myAll = (arr) => {
  let i = 0,
    len = arr.length;
  return new Promise((resolve, reject) => {
    let res = [];
    for (let j = 0; j < len; j++) {
      const item = arr[j];
      Promise.resolve(item)
        .then((data) => {
          res[j] = data;
          i++;
          if (i === len) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

Promise.prototype.finally = function (finallyFn) {
  return this.then(
    (value) => {
      return Promise.resolve(finallyFn()).then(() => value);
    },
    (err) => {
      return Promise.resolve(finallyFn()).then(() => {
        throw err;
      });
    }
  );
};
