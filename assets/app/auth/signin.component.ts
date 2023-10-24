import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin-component.html",
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  myForm: FormGroup;

  onLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (user) => {
        this.authService.setUser(user);
        this.router.navigate(["/messages"]).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.error("Erro ao fazer login:", error);
      }
    );
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      emailTS: new FormControl(null, [Validators.required, Validators.email]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }
}
