import { Component } from "@angular/core";

@Component({
  selector: "app-logout",
  template: `
    <button class="btn btn-danger" (click)="onLogout()">Logout</button>
  `,
})
export class LogoutComponent {
  onLogout() {}
}
