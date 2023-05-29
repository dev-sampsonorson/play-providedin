import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDeclaredComponent } from './lazy-declared.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazyDeclaredComponent }
];

@NgModule({
  declarations: [
    LazyDeclaredComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: 'MY_CONTEXT', useValue: 'LazyDeclaredModule' },
  ]
})
export class LazyDeclaredModule { }
