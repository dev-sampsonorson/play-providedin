import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    // The app module injector provides this service
    public service: MessageService
  ) {
    this.service.notify('AppComponent');
  }
}
