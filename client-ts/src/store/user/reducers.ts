import {
  CHECK_USER,
  API_REQUEST,
  UserSystemState,
  CURRENT_USER,
  SET_AUTH_STATUS,
  SystemActionTypes
} from "./types";

const initialState: UserSystemState = {
  user: { name: "", password: "", email: "" },
  currentUser: { email: "", token: "" }
};
export function setAuthStatus(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case SET_AUTH_STATUS: {
      return action.payload;
    }
    default:
      return state;
  }
}
export function currentUser(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case CURRENT_USER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}

export function checkUser(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case CHECK_USER: {
      return {
        // ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
export function apiRequest(
  state = initialState,
  action: SystemActionTypes
): UserSystemState {
  switch (action.type) {
    case API_REQUEST: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}
