export interface User {
  title: string;
  users: Users[];
}

export interface Users {
  name: string;
  cabinet: number;
  job: string;
  times: string[];
}
