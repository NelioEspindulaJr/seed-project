import { Component } from "@angular/core";
import { Message } from "./messages/message.model";
import { MessageService } from "./messages/message.services";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [MessageService],
})
export class AppComponent {
  mostrarElemento: boolean = true;

  onMudaMostrarElemento() {
    this.mostrarElemento = !this.mostrarElemento;
  }

  messageS: Message[] = [
    new Message("Xurras da jogada", "Nélio"),
    new Message("Tigarro", "Hugo"),
    new Message("sem memoria", "Lia"),
  ];
}
