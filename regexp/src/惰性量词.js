const str = "12345";
const arr = str.match(/(\d{1,3}?)(\d{1,3})/)
console.log(arr);

const arr2 = str.match(/^(\d{1,3}?)(\d{1,3})$/);
console.log(arr2);

const str2 = "candy啊";
console.log("can|candy", /can|candy/.test(str2));
console.log("^can|candy$", /^can|candy$/.test(str2));
console.log("^(?:can|candy)$", /^(?:can|candy)$/.test(str2));
