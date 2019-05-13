// Describing the different ACTION NAMES available
export const SHOW_MODULE = "SHOW_MODULE";


interface ShowModuleAction {
  type: typeof SHOW_MODULE;
  payload: string;
}

export type SystemActionTypes = ShowModuleAction
