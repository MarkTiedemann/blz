import { stellen, quersumme } from "./lib.js";

let g = [2, 1, 2, 1, 2, 1, 2, 1, 2];

export function _00(k) {
  let l = k.length, s = stellen(k, l), t = 0;
  for (let i = l - 2; i !== -1; i--)
    t += quersumme(s[i] * g[i]);
  return (10 - (t % 10)) % 10 === s[l - 1];
}
