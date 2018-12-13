import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

export interface User {
  id: string,
  name: string,
  role: string,
  pokemon: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = [{
    id: '1',
    name: 'Jane',
    role: 'Designer',
    pokemon: 'Blastoise'
  },
  {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    pokemon: 'Charizard'
  },
  {
    id: '3',
    name: 'Jim',
    role: 'Developer',
    pokemon: 'Venusaur'
  },
  {
    id: '4',
    name: 'Adam',
    role: 'Designer',
    pokemon: 'Yoshi'
  }];

  constructor() { }

  all () : Observable<Array<object>> {
    return of(this.users);
  }

  findOne (id:string) : Observable<User> {
    const user = this.users.find((u: User) => u.id === id);
    return of(user);
  }
}
