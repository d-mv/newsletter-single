// Describing the shape of the system's slice of state
import { NewQuery } from "../../types";

export interface Source {
  _id: string;
  name: string;
  url: string;
  home: string;
}

export interface SystemStateSource {
  sources: Source[];
}

// Describing the different ACTION NAMES available
export const LOAD_SOURCES = "LOAD_SOURCES";
export const SET_SOURCES = "SET_SOURCES";
export const SET_FILTER = "SET_FILTER";

interface LoadSourcesAction {
  type: typeof LOAD_SOURCES;
  payload: NewQuery;
}
interface SetSourcesAction {
  type: typeof SET_SOURCES;
  payload: any;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export type SystemActionTypes =
  | LoadSourcesAction|SetSourcesAction
  | SetFilterAction;
