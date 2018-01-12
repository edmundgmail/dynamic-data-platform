import { Component } from '@angular/core';

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  ws;
  constructor() {
    this.ws = new WebSocket("ws://localhost:9000/ws")
  }

}
