import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./auth/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.userName = user ? `Olá, ${user.firstName} ${user.lastName}!` : null;
    });
  }

  isUserLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
