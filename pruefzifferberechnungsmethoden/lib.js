
export function stellen(k, l) {
  let n = new Array(l);
  for (let i = 0; i < l; i++) {
    switch (k[i]) {
      case "0": n[i] = 0; break;
      case "1": n[i] = 1; break;
      case "2": n[i] = 2; break;
      case "3": n[i] = 3; break;
      case "4": n[i] = 4; break;
      case "5": n[i] = 5; break;
      case "6": n[i] = 6; break;
      case "7": n[i] = 7; break;
      case "8": n[i] = 8; break;
      case "9": n[i] = 9; break;
    }
  }
  return n;
}

export function quersumme(n) {
  if (n < 10)
    return n;

  let s = 0;
  while (n > 0) {
    s += n % 10 | 0;
    n /= 10;
  }
  return s;
}
