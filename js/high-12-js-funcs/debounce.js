function debounce(fn, delay) {
  let timer = null;
  return function debouncedFn() {
    const context = this;
    const args = arguments;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      fn.apply(context, args);
    }, delay);
  };
}

console.log("start", Date.now());

const a = debounce(() => console.log("我被执行啦", Date.now()), 1000);

a();
a();
a();
setTimeout(() => {
  a();
  setTimeout(() => {
    a();
  }, 500);
}, 1000);
