import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";
@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styles: [
    `
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
      }
      .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
      }
    `,
  ],
})
export class MessageComponent {
  constructor(private messageService: MessageService) {}
  @Input() messageVarClasse: Message = new Message("", "");
  @Input("inputMessage") messageVarClasseAlias: Message = new Message("", "");

  @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
  @Output() deleteClicked_MessageMetodoClasse = new EventEmitter<void>();

  color = "#CBC3E3";

  onEdit(event: Event) {
    event.preventDefault();
    this.editClicked_MessageMetodoClasse.emit("**Mensagem Editada");
  }

  onDelete(event: Event) {
    event.preventDefault();
    this.messageService.deleteMessage(this.messageVarClasse);
    this.deleteClicked_MessageMetodoClasse.emit();
  }
}
