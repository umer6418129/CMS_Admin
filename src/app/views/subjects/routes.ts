import { Routes } from '@angular/router';
import { SubjectsComponent } from './subjects.component';

export const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    data: {
      title: $localize`Faculties`
    }
  }
];


