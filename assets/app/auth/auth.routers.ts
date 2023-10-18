import { Routes } from "@angular/router";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
  { path: "", redirectTo: "signup", pathMatch: "full" },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "logout", component: LogoutComponent },
];
