import { Component } from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';
import {Subject} from 'rxjs/Subject';
import {Message} from "../../models/message";

const CHAT_URL = "ws://localhost:5000/ws";

@Component({
  templateUrl: './sql.snippet.component.html'
})

export class SQLSnippetComponent {

  messages: Subject<Message>  = new Subject<Message>();

  constructor(private wsService: WebSocketService) {
    this.messages   = <Subject<Message>>this.wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author : data.author,
          message: data.message,
          newDate: data.newDate
        }
      });

  this.messages.subscribe(msg => {
      console.log(msg);
    });

  }

}
