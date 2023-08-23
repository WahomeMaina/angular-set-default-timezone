import { Component } from '@angular/core';
import * as _momentTimezone from 'moment-timezone';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'set-default-timezone';
  constuctor() {
    _momentTimezone.tz.setDefault('Nairobi/Kenya'); //gmt +03:00
  }
}
