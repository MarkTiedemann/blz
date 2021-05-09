import { stellen } from "./lib.js";

let g = [4, 3, 2, 7, 6, 5, 4, 3, 2];

export function _06(k) {
  let l = k.length, i = l - 2, d = stellen(k, l), s = 0;
  for (; i !== -1; i--) s += d[i] * g[i];
  let r = s % 11;
  return (r === 1 || r === 0 ? 0 : 11 - r) === d[l - 1];
}
