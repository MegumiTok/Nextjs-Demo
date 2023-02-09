// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Todo model on the frontend
export interface User {
  _id?: number;
  name: string;
  avatar: string;
  email: string;
  salary: number;
  date: string;
  status: string;
}
