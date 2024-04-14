import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

}
