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

}
