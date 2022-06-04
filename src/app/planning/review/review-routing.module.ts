//balance-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewComponent,
    children: [
      {
        path: 'energy-sources',
        component: SourcesComponent,
      },
      {
        path: 'use-cases',
        component: SourcesComponent,
      },
      {
        path: 'finanace',
        component: SourcesComponent,
      },
      {
        path: 'optimization',
        component: SourcesComponent,
      },
      {
        path: '',
        redirectTo: 'energy-sources',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewRoutingModule {}
