import { Component } from "@angular/core";
import { Message } from "./messages/message.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  messageS: Message[] = [
    new Message("Xurras da jogada", "Nélio"),
    new Message("Tigarro", "Hugo"),
    new Message("sem memoria", "Lia"),
  ];
}
