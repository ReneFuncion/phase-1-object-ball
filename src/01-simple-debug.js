console.log("Simple debugging example running.");
debugger;

let x = 99;
debugger;
console.log(x);
let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));
