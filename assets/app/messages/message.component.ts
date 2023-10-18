import { Component, Input, Output } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";
import { EventEmitter } from "events";
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
  constructor(private messageServiceObj: MessageService) {}

  @Input() messageVarClasse: Message = new Message("", "");

  @Input("inputMessage") messageVarClasseAlias: Message = new Message("", "");

  @Output("outputMessage") editClicked_MessageMetodoClasse = new EventEmitter();

  @Output("outputMessage") editClicked_MessageMetodoClasseAlias =
    new EventEmitter();
  color = "yellow";
  onEdit() {
    this.editClicked_MessageMetodoClasse.emit("texto veio de la e ta pra ca");
    this.editClicked_MessageMetodoClasseAlias.emit(
      "texto veio de la e ta pra ca - alias"
    );
  }

  onDelete() {
    this.messageServiceObj.deleteMessage(this.messageVarClasse);
  }
}
