import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyEmptyComponent } from './lazy-empty.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazyEmptyComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: 'MY_CONTEXT', useValue: 'LazyEmptyModule' },
  ]
})
export class LazyEmptyModule { }
