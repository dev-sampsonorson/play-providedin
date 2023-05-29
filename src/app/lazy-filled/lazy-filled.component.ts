import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'so-lazy-filled',
  template: `
    <p>
      lazy-filled works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [MessageService]
})
export class LazyFilledComponent {

  constructor(
    // The lazy module injector provides this service
    // The service is not re-created upon switching between routes
    public service: MessageService
  ) {
    this.service.notify('LazyFilledComponent');
  }

}
