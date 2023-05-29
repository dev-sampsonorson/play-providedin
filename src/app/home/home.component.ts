import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'so-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
