import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanningComponent } from './planning.component';

const planningRoutes: Routes = [
  {
    path: '',
    component: PlanningComponent,
    children: [
      {
        path: 'sources',
        loadChildren: () =>
          import(`./energy-source/energy-source.module`).then(
            (m) => m.EnergySourceModule
          ),
      },
      {
        path: 'cases',
        loadChildren: () =>
          import(`./use-cases/use-case.module`).then((m) => m.UseCaseModule),
      },
      {
        path: 'adv-setting',
        loadChildren: () =>
          import(`./adv-setting/adv-setting.module`).then(
            (m) => m.AdvSettingModule
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import(`./review/review.module`).then((m) => m.ReviewModule),
      },
      {
        path: '',
        redirectTo: 'sources',
        pathMatch: 'full',
      },
      // { path: '**', component: Page404leavesComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(planningRoutes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}
