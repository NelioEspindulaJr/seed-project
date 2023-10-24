import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class MessageService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  private messageSService: Message[] = [];

  addMessage(message: Message): Observable<any> {
    this.messageSService.push(message);

    const bodyReq = JSON.stringify(message);

    const headers = new HttpHeaders({ "Content-type": "application/json" });

    return this.http
      .post(`${this.apiUrl}/message`, bodyReq, { headers })
      .pipe(catchError((error) => Observable.throw(error)));
  }

  getMessages(): Message[] {
    return this.messageSService;
  }

  deleteMessage(message: Message): void {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
  }
}
