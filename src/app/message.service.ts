import { Inject, Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'any',

})
export class MessageService {

  constructor(@Optional() @Inject('MY_CONTEXT') private context: string) {
    console.log(`${this.context}: init message service`);
  }

  notify(context: string) {
    console.log(`${context} called me!`)
  }
}
