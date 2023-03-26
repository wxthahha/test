const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
};

console.log("start", Date.now());

const aa = throttle((number) => {
  console.log(Date.now(), number);
}, 1000);

aa(0);

new Promise((resolve) =>
  setTimeout(() => {
    resolve();
  }, 200)
).then(() => {
  aa(1);
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 200)
  ).then(() => {
    aa(2);
    new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    ).then(() => {
      aa(3);
      new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      ).then(() => {
        aa(4);
        new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 200)
        ).then(() => {
          aa(5);
          new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 200)
          ).then(() => {
            aa(6);
            new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 200)
            ).then(() => {
              aa(7);
              new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, 200)
              ).then(() => {
                aa(8);
                new Promise((resolve) =>
                  setTimeout(() => {
                    resolve();
                  }, 200)
                ).then(() => {
                  aa(9);
                  new Promise((resolve) =>
                    setTimeout(() => {
                      resolve();
                    }, 200)
                  ).then(() => {
                    aa(10);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
