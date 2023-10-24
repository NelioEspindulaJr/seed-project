import { Routes } from "@angular/router";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { AuthGuard } from "./auth.guard";
import { LogoutGuard } from "./logout.guard";

export const AUTH_ROUTES: Routes = [
  { path: "", redirectTo: "signup", pathMatch: "full" },
  { path: "signup", component: SignupComponent, canActivate: [LogoutGuard] },
  { path: "signin", component: SigninComponent },
  { path: "logout", component: LogoutComponent, canActivate: [AuthGuard] },
];
