import { Component } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@Component({
  selector: 'app-addmissions',
  templateUrl: './addmissions.component.html',
  styleUrl: './addmissions.component.scss',
  standalone: true,
    imports: [SharedModule],
})
export class AddmissionsComponent {
tableColumns : any = [
  "#",
  "student id",
  "name",
  "father name",
  "mother name",
  "course",
  "status",
  "action",
];
data : any = [
  {
    std_id : 'Std-1001',
    name : 'Shawn',
    father_name : 'Simon',
    mother_name : 'Rossie',
    status:"Pending",
    course:"Science",
  },
  {
    std_id : 'Std-1002',
    name : 'Ali',
    father_name : 'Usama',
    mother_name : '--',
    status:"Accepted",
    course:"Pre-Eng",
  },
  {
    std_id : 'Std-1003',
    name : 'Ranbeer',
    father_name : 'Ranjeet',
    mother_name : 'Neela',
    status:"Rejected",
    course:"xyz",
  },
]
}
