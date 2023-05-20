import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './blogger/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogger/favorites', pathMatch: 'full' },
  { path: 'blogger/favorites', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
