import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  @Input() label:  string | undefined;
  fieldTextType: boolean | undefined;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  constructor() {}

}
