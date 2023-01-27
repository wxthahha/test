// let a = { 'x': 1, 'y': 2 };

// let a = [
//     new Number(1),
//     new String(1),
//     new Boolean(false)
// ]

// var a = {
//     'x': [0, undefined, function(){}, Symbol(1), BigInt(9007199254740991)]
// }

// let a = {
//     x: undefined,
//     y: [undefined, function a(){}, Symbol(1)],
//     z: function a(){},
//     a: Symbol(1)
// }

// console.log(JSON.stringify(a));
// console.log(JSON.stringify(a, (key, value) => {
//     console.log(key, value);
//     return value
// }, 1));

// console.log(JSON.stringify(
//     {[Symbol.for("foo")]: "foo"},
//     function (k, v) {
//         if (typeof k === "symbol"){
//             return "a symbol";
//         }
//     }
// ))

// console.log(JSON.stringify(Symbol(1)));
// console.log(JSON.stringify(+0));
// console.log(JSON.stringify(-0));
// console.log(JSON.stringify(Infinity));
// console.log(JSON.stringify(-Infinity));
// console.log(JSON.stringify(NaN));

// console.log(JSON.stringify(new Date()))
console.log(JSON.stringify(/^/g))

