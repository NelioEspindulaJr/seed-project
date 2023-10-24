import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routers";
import { AuthGuard } from "./auth/auth.guard";
import { UserComponent } from "./user/user.component";

const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/messages",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  { path: "messages", component: MessagesComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthenticationComponent, children: AUTH_ROUTES },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
  },
];

export const myRouting = RouterModule.forRoot(APP_ROUTES);
