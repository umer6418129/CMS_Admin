import { Component } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './faculties.component.html',
  styleUrl: './faculties.component.scss'
})
export class FacultiesComponent {
  tableColumns : any = [
    "#",
    "name",
    "email",
    "department",
    "type",
    "action",
  ];
  data : any = [
    {
      name : 'mack',
      email : 'mack@example.com',
      department : 'Sceince',
      type : 'professor',
    },
    {
      name : 'Azhar',
      email : 'azhar@example.com',
      department : 'Medical',
      type : 'assistant professor',
    },
    {
      name : 'Annie',
      email : 'annie@example.com',
      department : 'Sceince',
      type : 'assistant professor',
    },
    {
      name : 'Faiq',
      email : 'faiq@example.com',
      department : 'Medical',
      type : 'assistant professor',
    },
    {
      name : 'shawn',
      email : 'shawn@example.com',
      department : 'Sceince',
      type : 'professor',
    },
  ]
}
