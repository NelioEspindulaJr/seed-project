import { Component } from "@angular/core";
import { MessageService } from "./message.services";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
})
export class MessageInputComponent {
  constructor(
    private messageService: MessageService,
    private authService: AuthenticationService
  ) {}

  private userName: string | null = null;

  private userId: string | null = null;

  onSubmit(form: NgForm) {
    this.authService.currentUser$.subscribe((user) => {
      this.userId = user ? user.id : null;
      this.userName = user ? `${user.firstName} ${user.lastName}` : null;
    });

    const writtenMessage = new Message(
      form.value.myContentngForm,
      this.userName,
      this.userId
    );
    this.messageService.addMessage(writtenMessage).subscribe(
      (dadosSucesso) => console.log(dadosSucesso),
      (dadosErro) => console.log(dadosErro)
    );

    form.resetForm();
  }
}
