import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <h2>{{ user.name }}</h2>
        <span [ngSwitch]="user.format">
          <span *ngSwitchCase="'InPerson'">In-Person</span>
          <span *ngSwitchCase="'Online'">Online</span>
          <span *ngSwitchDefault>TBD</span>
        </span>
      </li>
    </ul> 
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() users;
}
