import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person = {
    name: 'Raincal',
    city: 'Shanghai, China'
  };
};
