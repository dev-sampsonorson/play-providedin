import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'so-lazy-declared',
  template: `
    <p>
      lazy-declared works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyDeclaredComponent {

  constructor(
    // The lazy module injector provides this service
    // The service is not re-created upon switching between routes
    public service: MessageService
  ) {
    this.service.notify('LazyDeclaredComponent');
  }

}
