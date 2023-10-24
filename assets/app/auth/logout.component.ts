import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-logout",
  template: `
    <button class="btn btn-danger" (click)="onLogout($event)">Logout</button>
  `,
})
export class LogoutComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  onLogout(event: Event) {
    event.preventDefault();

    this.authService.logout();
    this.router.navigate(["/auth/signin"]);
  }
}
