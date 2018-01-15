import {Component, ViewChild} from '@angular/core';
import {WebSocketService} from '../../services/websocket.service';
import {Subject} from 'rxjs/Subject';
import {Message} from "../../models/message";
import {TabComponent} from "../../components/tabs/tab.component";
import {TabsComponent} from "../../components/tabs/tabs.component";

const CHAT_URL = "ws://localhost:5000/ws";

@Component({
  templateUrl: './sql.snippet.component.html'
})

export class SQLSnippetComponent {
  @ViewChild(TabsComponent) tabsComponent;


  messages: Subject<Message>  = new Subject<Message>();


  public tabs: any[] = [
    {heading: 'Dynamic Title 1', content: 'dyna1'},
    {heading: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {heading: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public removeTabHandler(){

  }

  constructor(private wsService: WebSocketService) {
    /*
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
*/
  }

}
