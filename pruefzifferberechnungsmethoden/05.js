import { stellen } from "./lib.js";

let g = [1, 3, 7, 1, 3, 7, 1, 3, 7];

export function _05(k) {
  let l = k.length, i = l - 2, d = stellen(k, l), s = 0;
  for (; i !== -1; i--) s += d[i] * g[i];
  return (10 - (s % 10)) % 10 === d[l - 1];
}
