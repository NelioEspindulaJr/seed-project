import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin-component.html",
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      emailTS: new FormControl(null, [Validators.required, Validators.email]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }
}
