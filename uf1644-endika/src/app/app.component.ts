import { Component } from '@angular/core';
import { GLOBAL } from '../global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uf1644-endika';
  global = GLOBAL;
}
