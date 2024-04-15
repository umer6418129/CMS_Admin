import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
@Component({
  selector: 'app-courses',
  standalone: true,
    imports: [SharedModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
