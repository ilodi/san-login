import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label:  string | undefined;
  constructor() { }
}
