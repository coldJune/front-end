import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="crisis" routerLinkActive="active">Cirsis Center</a>
      <a routerLink="heroes" routerLinkActive="active"> Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subtitle = '(final)';
}
