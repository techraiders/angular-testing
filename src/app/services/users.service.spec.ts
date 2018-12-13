import { TestBed, async } from "@angular/core/testing";
import { of } from "rxjs";

import { UsersService, User } from "./users.service";

describe("UsersService", () => {
  let usersService: UsersService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
    usersService = TestBed.get(UsersService); // Add this
  });

  it("should be created", () => {
    expect(usersService).toBeTruthy();
  });

  describe(`all`, () => {
    it(`should rerurn a collection of users`, () => {
      const userResponse = [
        {
          id: "1",
          name: "Jane",
          role: "Designer",
          pokemon: "Blastoise"
        },
        {
          id: "2",
          name: "Bob",
          role: "Developer",
          pokemon: "Charizard"
        }
      ];

      let response;
      spyOn(usersService, "all").and.returnValue(of(userResponse));

      usersService.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe("fineOne", () => {
    it("should return a single user", () => {
      const userResponse = {
        id: "2",
        name: "Bob",
        role: "Developer",
        pokemon: "Charizard"
      };
      let response;
      spyOn(usersService, "findOne").and.returnValue(of(userResponse));

      usersService.findOne("2").subscribe((res: User) => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
