import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewLayoutComponent,
  },
  {
    path: 'edit',
    component: EditLayoutComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
