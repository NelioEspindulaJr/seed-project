import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Http } from "@angular/http";

@Injectable()
export class MessageService {
  constructor(private http: Http) {}

  private messageSService: Message[] = [];

  addMessage(message: Message) {
    this.messageSService.push(message);
    console.log(this.messageSService);

    const bodyReq = JSON.stringify(message);
    return this.http.post("http://localhost:3000/message", bodyReq);
  }

  getMessages() {
    return this.messageSService;
  }

  deleteMessage(message: Message) {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
  }
}
