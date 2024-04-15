import { Component } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  tableColumns : any = [
    "#",
    "subject name",
    "action"
  ];
  data : any = [
    {
      name : 'Sceince',
    },
    {
      name : 'Medical',
    },
    {
      name : 'xyz',
    },
    {
      name : 'xyz',
    },
    {
      name : 'xyz',
    },
    {
      name : 'xyz',
    },
    {
      name : 'xyz',
    },
  ]
}
