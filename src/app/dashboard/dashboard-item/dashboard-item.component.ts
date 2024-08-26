import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss',
})
export class DashboardItemComponent {
  @Input({ required: true }) src: string = '';
  @Input({ required: true }) alt: string = '';
  @Input({ required: true }) title: string = '';
}
