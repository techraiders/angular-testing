import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as faker from "faker";

export interface User {
  id: string;
  name: string;
  role: string;
  pokemon: string;
}

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: Array<User> = [];

  constructor() {
    const { name } = faker;

    while (this.users.length < 4) {
      this.users.push({
        id: faker.random.alphaNumeric(7),
        name: name.findName(),
        role: name.jobTitle(),
        pokemon: name.jobDescriptor()
      });
    }
  }

  all(): Observable<Array<object>> {
    return of(this.users);
  }

  findOne(id: string): Observable<User> {
    const user = this.users.find((u: User) => u.id === id);
    return of(user);
  }
}
