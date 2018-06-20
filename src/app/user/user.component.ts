import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  child_title = this.constructor.name
}
