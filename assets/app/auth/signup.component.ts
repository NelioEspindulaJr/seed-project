import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup-component.html",
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      firstNameTS: new FormControl(null, Validators.required),
      lastNameTS: new FormControl(null, Validators.required),
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+"),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }

  onSignup(formValues: any) {
    const { emailTS, passwordTS, firstNameTS, lastNameTS } = formValues;

    this.authService
      .signup(emailTS, passwordTS, firstNameTS, lastNameTS)
      .subscribe(
        (response) => {
          console.log("Usuário cadastrado com sucesso!", response);

          this.router.navigate(["/"]);
        },
        (error) => {
          console.error("Erro ao cadastrar usuário:", error);
        }
      );
  }
}
