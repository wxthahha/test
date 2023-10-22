const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function isFunction(params) {
  return typeof params === "function";
}

function isObject(params) {
  return typeof params === "object" && params !== null;
}

class MPromise {
  onFulfilledTask = [];
  onRejectedTask = [];

  _status = PENDING;

  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.reject = this.reject.bind(this);
    this.resolve = this.resolve.bind(this);
    try {
      fn(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
    }
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    this._status = newStatus;
    switch (newStatus) {
      case FULFILLED: {
        this.onFulfilledTask.forEach((callback) => {
          callback(this.value);
        });
        break;
      }
      case REJECTED: {
        this.onRejectedTask.forEach((callback) => {
          callback(this.reason);
        });
        break;
      }
    }
  }

  then(onFulfilled, onRejected) {
    const onFulfilledFn = isFunction(onFulfilled)
      ? onFulfilled
      : (value) => value;
    const onRejectedFn = isFunction(onRejected)
      ? onRejected
      : (reason) => {
          throw reason;
        };
    const promise2 = new MPromise((resolve, reject) => {
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = onFulfilledFn(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = onRejectedFn(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };
      switch (this.status) {
        case FULFILLED: {
          fulfilledMicrotask();
          break;
        }
        case REJECTED: {
          rejectedMicrotask();
          break;
        }
        default: {
          // pending态
          this.onFulfilledTask.push(fulfilledMicrotask);
          this.onRejectedTask.push(rejectedMicrotask);
          break;
        }
      }
    });
    return promise2;
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError("chaining circle"));
    }
    if (x instanceof MPromise) {
      queueMicrotask(() => {
        x.then((y) => {
          this.resolvePromise(promise2, y, resolve, reject);
        }, reject);
      });
    } else if (isFunction(x) || isObject(x)) {
      let then = null;
      try {
        then = x.then;
      } catch (error) {
        reject(error);
      }
      if (isFunction(then)) {
        let called = false;
        try {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              this.resolvePromise(promise2, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } catch (error) {
          if (called) return;
          reject(error);
        }
      } else {
        resolve(x);
      }
    } else {
      resolve(x);
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    if (value instanceof MPromise) {
      return value;
    }
    return new MPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MPromise((resolve, reject) => reject(reason));
  }

  static race(arr) {
    return new MPromise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        return reject(new TypeError("入参需要数组"));
      }
      if (arr.length === 0) {
        return resolve();
      }
      arr.forEach((item) => {
        MPromise.resolve(item).then(resolve, reject);
      });
    });
  }

  static all(arr) {
    return new MPromise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        return reject(new TypeError("入参需要数组"));
      }
      const len = arr.length;
      let res = [],
        valLen = 0;
      for (let i = 0; i < len; i++) {
        MPromise.resolve(arr[i]).then(
          (value) => {
            res[i] = value;
            valLen++;
            if (valLen === len) {
              resolve(res);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MPromise.resolve(callback()).then(() => {
          return value;
        });
      },
      (reason) => {
        return MPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }
}

// const promise1 = new MPromise((resolve) => {
//   setTimeout(() => {
//     resolve(111);
//   }, 1000);
// }).then(console.log);

// console.log(promise1);

// setTimeout(() => {
//   console.log(promise1);
// }, 2000);

// const test = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(111);
//   }, 1000);
// }).catch((reason) => {
//   console.log("报错", reason); // 报错 111
//   console.log(test);
//   /**
//    * {
//    *  status: "pending",
//    *  value: null,
//    *  reason: null
//    * }
//    */
// });

// setTimeout(() => {
//   console.log(test);
//   /**
//    * {
//    *  status: "fulfilled",
//    *  value: undefined,
//    *  reason: null
//    * }
//    */
// }, 3000);

// const a = MPromise.all([1, 2, 4, MPromise.resolve(22), MPromise.reject(1)]);
// setTimeout(() => {
//   console.log(a);
// }, 1000);

const a = new MPromise((resolve, reject) => {
  reject(1);
}).finally((...args) => {
  console.log("finally", args, a);
});

setTimeout(() => {
  console.log(a);
}, 1000);
