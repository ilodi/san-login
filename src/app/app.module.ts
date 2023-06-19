import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { HrLineComponent } from './components/hr-line/hr-line.component';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    HrLineComponent,
    InputDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
