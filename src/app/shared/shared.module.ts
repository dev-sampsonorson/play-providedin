import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedComponent],
  providers: [
    { provide: 'MY_CONTEXT', useValue: 'SharedModule' },
  ]
})
export class SharedModule { }
