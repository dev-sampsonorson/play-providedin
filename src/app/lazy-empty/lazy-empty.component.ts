import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'so-lazy-empty',
  template: `
    <p>
      lazy-empty works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyEmptyComponent {

}
