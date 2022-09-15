import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestContainerComponent } from './interest-container/interest-container.component';
import { InterestComponent } from './interest.component';

const routes: Routes = [
  { 
    path: '', 
    component: InterestComponent, 
    children: [
      {
        path: 'list',
        component: InterestContainerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestRoutingModule { }
