import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrevComponent } from './prev/prev.component';

const appRoutes: Routes = [
  {
    path: 'planning',
    // component: NewAnalysisComponent,
    loadChildren: () =>
      import('./planning/planning.module').then((m) => m.PlanningModule),
  },
  {
    path: 'prev-analysis',
    component: PrevComponent,
  },
  { path: '', redirectTo: 'planning', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
