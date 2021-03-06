import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService, User } from "../services/users.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  users: Array<User>;
  subscription: Subscription;
  date: number;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.subscription = this.usersService
      .all()
      .subscribe((res: Array<User>) => {
        this.users = res;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
