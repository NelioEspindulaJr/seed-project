import { Component } from "@angular/core";
import { MessageService } from "./message.services";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
})
export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    const writtenMessage = new Message(form.value.myContentngForm, "Nélio");
    this.messageService.addMessage(writtenMessage);
    console.log(form);
    form.resetForm();
  }
}
