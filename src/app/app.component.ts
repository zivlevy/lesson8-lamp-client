import { Component } from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lampValue;
  constructor(private socketService: SocketService) {
    this.socketService.getLampData$().subscribe((data) => {
      this.lampValue = data;
    })
  }

  dataChanged(value){
    this.socketService.setLampData(value);
  }
}
