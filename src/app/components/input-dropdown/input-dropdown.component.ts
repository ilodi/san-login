import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})
export class InputDropdownComponent {
  @Input() label:  string | undefined;
  //@Input() domain_list: string[] | undefined;
  domain_list = ["SVRN", "PRBMX", "SGT", "GFSSCORP", "ALTECMEXICO"];
  constructor() {}
}
