interface BLZ {
  bankleitzahl: string;
  merkmal: string;
  bezeichnung: string;
  plz: string;
  ort: string;
  kurzbezeichnung: string;
  pan: string;
  bic: string;
  pruefzifferberechnungsmethode: string;
  datensatznummer: string;
  aenderungskennzeichen: string;
  bankleitzahlloeschung: string;
  nachfolgebankleitzahl: string;
}

let bankleitzahlen: BLZ[] = JSON.parse(
  await Deno.readTextFile("../blz_json/blz.json")
);

console.log(
  bankleitzahlen.map((b) => b.bankleitzahl).join("").length + "\toriginal"
);

let only_payments = bankleitzahlen
  // Datensätze  mit  dem  Merkmal  "2"  dienen  nicht  dem  Zahlungsverkehr
  .filter((b) => b.merkmal !== "2")
  .map((b) => b.bankleitzahl);

console.log(only_payments.join("").length + "\tnur_zahlungsverkehr");

let uniques = Array.from(new Set(only_payments));

let offsets = uniques
  .map((b) => parseInt(b))
  .map((b, i, a) => (i === 0 ? b : b - a[i - 1]))
  .join(";");

console.log(offsets.length + "\toffsets");

let base36 = offsets
  .split(";")
  .map((n) => parseInt(n).toString(36))
  .join(";");

console.log(base36.length + "\tbase36");

await Deno.writeTextFile(
  "blz.js",
  `// Heruntergeladen von https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen/download-bankleitzahlen-602592
// Gültig vom 08.03.2021 bis 06.06.2021
// Bankleitzahlen, die nicht dem Zahlungsverkehr dienen, wurden entfernt
// Mit Basis 36 Offsets encodiert, um die Dateigröße zu mindern

export const bankleitzahlen = (() => {
  let b = "${base36}".split(";").map(s => parseInt(s, 36));
  for (let i = 0; i < b.length; i++) b[i] += i === 0 ? 0 : b[i - 1];
  return new Set(b);
})();
`
);
