import {
  LOAD_SOURCES,
  SET_SOURCES,
  SET_FILTER,
  SystemActionTypes
} from "./types";
import { NewQuery } from "../../types";

const emptyQuery: NewQuery = {
  token: "",
  action: ["", ""]
};

export function loadSources(
  state = emptyQuery,
  action: SystemActionTypes
): NewQuery {
  switch (action.type) {
    case LOAD_SOURCES: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export function setSources(state = [], action: SystemActionTypes) {
  switch (action.type) {
    case SET_SOURCES: {
      return action.payload;
    }
    default:
      return state;
  }
}

export function setFilter(state = "", action: { type: any; payload: string }) {
  console.log("source-red ");
  console.log(action.payload);

  switch (action.type) {
    case SET_FILTER: {
      return action.payload;
    }
    default:
      return state;
  }
}
