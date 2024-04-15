import { Routes } from '@angular/router';
import { FacultiesComponent } from './faculties.component';

export const routes: Routes = [
  {
    path: '',
    component: FacultiesComponent,
    data: {
      title: $localize`Faculties`
    }
  }
];


