import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
