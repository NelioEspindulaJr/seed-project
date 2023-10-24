import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class LogoutGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["/auth/logout"]);
      return false;
    } else {
      return true;
    }
  }
}
