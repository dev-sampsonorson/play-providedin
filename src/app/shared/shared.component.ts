import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'so-shared',
  template: `
    <p>
      shared works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {

  constructor(
    // The app module injector provides this service
    public service: MessageService
  ) {
    this.service.notify('SharedComponent');
  }
}
