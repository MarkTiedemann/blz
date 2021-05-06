import { bankleitzahlen } from "./blz.js";

function bankleitzahl_ist_valide(iban) {
  return bankleitzahlen.has(parseInt(iban.substring(4, 12)));
}

console.assert(bankleitzahl_ist_valide("DE75512108001245126199"));
