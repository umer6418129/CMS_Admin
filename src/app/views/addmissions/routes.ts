import { Routes } from '@angular/router';
import { AddmissionsComponent } from './addmissions.component';

export const routes: Routes = [
  {
    path: '',
    component: AddmissionsComponent,
    data: {
      title: $localize`Addmissions`
    }
  }
];


