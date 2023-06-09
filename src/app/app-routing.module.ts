import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './blogger/list/list.component';
import { DetailsComponent } from './blogger/details/details.component';
import { AddComponent } from './blogger/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogger/favorites', pathMatch: 'full' },
  { path: 'blogger', redirectTo: 'blogger/favorites', pathMatch: 'full' },
  { path: 'blogger/favorites', component: ListComponent },
  { path: 'blogger/details/:id', component: DetailsComponent },
  { path: 'blogger/add', component: AddComponent },
  { path: 'blogger/update/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
