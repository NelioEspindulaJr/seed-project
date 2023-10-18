import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
  selector: "app-message-list",
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-message
        [messageVarClasse]="msg"
        (editClicked_MessageMetodoClasse)="msg.content = $event"
        *ngFor="let msg of messageS"
      >
      </app-message>
    </div>
  `,
})
export class MessageList implements OnInit {
  constructor(private messageService: MessageService) {}

  messageS: Message[] = [
    new Message("Xurras da jogada", "Nélio"),
    new Message("Tigarro", "Hugo"),
    new Message("sem memoria", "Lia"),
  ];

  ngOnInit(): void {
    this.messageS = this.messageService.getMessages();
  }
}
