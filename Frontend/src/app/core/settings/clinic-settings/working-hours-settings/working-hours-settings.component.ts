import { Component } from '@angular/core';

@Component({
  selector: 'app-working-hours-settings',
  standalone: false,
  templateUrl: './working-hours-settings.component.html',
  styleUrl: './working-hours-settings.component.scss'
})
export class WorkingHoursSettingsComponent {
selectedDate:Date[]=[];
}
