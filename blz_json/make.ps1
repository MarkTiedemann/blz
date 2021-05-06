(get-content xlsx_impl.js) -replace 'var XLSX = {};', 'export var XLSX = {};' | out-file xlsx_impl.js
(get-content xlsx_types.d.ts) -replace 'import \* as CFB from "cfb";', 'declare var CFB: any;' -replace 'import \* as SSF from "ssf";', 'declare var SSF: any;' | out-file -encoding utf8 xlsx_types.d.ts
