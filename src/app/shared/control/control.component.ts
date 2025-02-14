import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required<string>();
}
