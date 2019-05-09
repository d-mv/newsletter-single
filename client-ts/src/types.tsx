export interface AuthObj {
  new: boolean;
  fields: {
    name: string;
    email: string;
    password: string;
  };
}
export interface NewQuery {
  token: string;
  action: string[];
  id?: string;
  fields?: { [index: string]: string };
}
export interface CurrentUser {
  email: string;
  token: string;
}
