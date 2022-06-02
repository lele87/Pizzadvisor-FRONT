export interface User {
  username: string;
  name: string;
  id: string;
}

export interface IPizzeria {
  name: string;
  address: string;
  image: string;
  timetable: string;
  specialty: string[];
  owner: string;
}
