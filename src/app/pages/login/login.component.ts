import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  url = "/assets/brand/brand_icon.svg";
  title = 'Capacity';
  subtitle = 'Online Service Level Metrics';
  label_name = 'Username';
  domain_list = ["SVRN", "PRBMX", "SGT", "GFSSCORP", "ALTECMEXICO"];
  label_password = 'Password';
  label_button = 'Log-in';
  active_button = !false;

  loginAction() {
   console.log('touch me!');
  }

}
