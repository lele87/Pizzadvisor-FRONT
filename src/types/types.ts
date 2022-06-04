export interface User {
  username: string;
  name: string;
  id: string;
}

export interface State {
  userInfo: User;
  logged: boolean;
}

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface ResponseApi {
  data: {
    token: string;
  };
}

export interface DecodeToken {
  name: string;
  username: string;
  id: string;
}

export interface IPizzeria {
  name: string;
  address: string;
  image: string;
  timetable: string;
  specialty: string[];
  owner: string;
  _id: string;
}
