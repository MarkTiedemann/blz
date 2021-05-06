// deno run --allow-read --allow-write to_json.ts

import { XLSX } from "./xlsx.ts";
import { WorkSheet } from "./xlsx_types.d.ts";

// MAIN

let data = await Deno.readFile("blz.xlsx");

let workbook = XLSX.read(data, { type: "array" });
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
let cells = sheet_to_array(worksheet);

let headers = cells.splice(0, 1)[0].map(clean_header_name);
let items = cells.map((row) =>
  Object.fromEntries(row.map((c, i) => [headers[i], c]))
);

await Deno.writeTextFile("blz.json", JSON.stringify(items, null, 2));

// UTILS

function clean_header_name(header: string) {
  return header
    .toLocaleLowerCase()
    .replaceAll("-", "")
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue");
}

function sheet_to_array(sheet: WorkSheet) {
  let result: string[][] = [];
  let row: string[];
  let row_num;
  let col_num;
  let range = XLSX.utils.decode_range(sheet["!ref"]!);
  for (row_num = range.s.r; row_num <= range.e.r; row_num++) {
    row = [];
    for (col_num = range.s.c; col_num <= range.e.c; col_num++) {
      let cell = sheet[XLSX.utils.encode_cell({ r: row_num, c: col_num })];
      row.push(cell === undefined ? "" : cell.w);
    }
    result.push(row);
  }
  return result;
}
