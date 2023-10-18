import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageList } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessageService } from "./messages/message.services";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { myRouting } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageList,
    MessageInputComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    HttpModule,
  ],
  imports: [BrowserModule, FormsModule, myRouting, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [MessageService],
})
export class AppModule {}
