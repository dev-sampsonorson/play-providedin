import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shared', component: SharedComponent },
  {
    path: 'lazy-filled',
    loadChildren: () =>
      import('./lazy-filled/lazy-filled.module').then(
        (m) => m.LazyFilledModule
      ),
  },
  {
    path: 'lazy-empty',
    loadChildren: () =>
      import('./lazy-empty/lazy-empty.module').then(
        (m) => m.LazyEmptyModule
      ),
  },
  {
    path: 'lazy-declared',
    loadChildren: () =>
      import('./lazy-declared/lazy-declared.module').then(
        (m) => m.LazyDeclaredModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
