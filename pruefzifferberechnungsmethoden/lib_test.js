import { stellen, quersumme } from "./lib.js";

console.assert(stellen("5", 1)[0] === 5);
console.assert(stellen("42", 2)[1] === 2);

for (let i = 0; i < 10; i++) console.assert(quersumme(i) === i);
for (let i = 10, j = 1; i < 20; i++, j++) console.assert(quersumme(i) === j);
for (let i = 20, j = 2; i < 30; i++, j++) console.assert(quersumme(i) === j);
