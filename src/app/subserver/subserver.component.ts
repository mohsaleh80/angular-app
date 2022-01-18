import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subserver',
  templateUrl: './subserver.component.html',
  styleUrls: ['./subserver.component.css'],
})
export class SubserverComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title: string = 'SubServer';
  serverName = 'SubServer 102';
  serverStatus = 'Offline';

  getServerName() {
    return this.serverName;
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
