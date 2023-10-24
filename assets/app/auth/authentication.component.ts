import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-authentication",
  template: ` <div class="col-md-8 col-md-offset-2">
    <h1>Componente de Autenticação</h1>
    <header class="row spacing">
      <nav>
        <ul class="nav nav-tabs">
          <li routerLinkActive="active" *ngIf="!isUserLoggedIn()">
            <a [routerLink]="['signup']">SignUp</a>
          </li>
          <li routerLinkActive="active" *ngIf="!isUserLoggedIn()">
            <a [routerLink]="['signin']">SignIn</a>
          </li>
          <li routerLinkActive="active" *ngIf="isUserLoggedIn()">
            <a [routerLink]="['logout']">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="row spacing">
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class AuthenticationComponent {
  constructor(private authService: AuthenticationService) {}

  isUserLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
