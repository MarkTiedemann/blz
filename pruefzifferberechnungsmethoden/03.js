import { stellen } from "./lib.js";

let g = [2, 1, 2, 1, 2, 1, 2, 1, 2];

export function _03(k) {
  let l = k.length, i = l - 2, d = stellen(k, l), s = 0;
  for (; i !== -1; i--) s += d[i] * g[i];
  return (10 - (s % 10)) % 10 === d[l - 1];
}
