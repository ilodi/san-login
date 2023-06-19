import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent {
  @Input() label:  string | undefined;
  constructor() {}
}
