import { SHOW_MODULE } from "./types";

export function showModule(module: string) {
  return {
    type: SHOW_MODULE,
    payload: module
  };
}