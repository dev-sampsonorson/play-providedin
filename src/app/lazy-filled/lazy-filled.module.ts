import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFilledComponent } from './lazy-filled.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from '../message.service';

const routes: Routes = [
  { path: '', component: LazyFilledComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    { provide: 'MY_CONTEXT', useValue: 'LazyFilledModule' },
    // { provide: MessageService, useFactory: () => new MessageService('Manual Creation') },
  ]
})
export class LazyFilledModule { }
