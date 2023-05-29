import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'so-lazy-filled',
  template: `
    <p>
      lazy-filled works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyFilledComponent {

}
