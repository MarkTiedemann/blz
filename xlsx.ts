import types from "./xlsx_types.d.ts";
import { XLSX as impl } from "./xlsx_impl.js";
export const XLSX = impl as typeof types;
