import { Component } from '@angular/core';
import { UserComponent } from './user.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parent_title = this.constructor.name;
}
