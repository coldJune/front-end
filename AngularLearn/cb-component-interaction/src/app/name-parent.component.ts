import {Component} from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>Master controls{{names.length}}</h2>
    <app-name-child *ngFor='let name of names' [name]='name'></app-name-child>
  `
})

export class NameParentComponent {
  names = ['cui', 'deng', '  '];
}

