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
  tableColumns : any = [
    "#",
    "course_name",
    "category",
    "is_available",
    "action"
  ];
  data : any = [
    {
      course_name : 'Sceince',
      is_available : false,
      category : 'Sceince & Technology',
    },
    {
      course_name : 'Medical',
      is_available : true,
      category : 'Sceince & Technology'
    },
    {
      course_name : 'xyz',
      is_available : true,
      category : 'Sceince & Technology',
    },
  ]
}
