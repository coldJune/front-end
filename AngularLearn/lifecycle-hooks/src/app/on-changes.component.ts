
import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';

class Hero {
  constructor(public name: string) {}
}
@Component({
  selector: 'on-changes',
  template: `
    <div class="hero">
      <p>{{hero.name}}can {{power}}</p>
    </div>
    <h4>-- Change Log---</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  `,
  styles: [
    '.hero {background: LinghtYellow;padding: 8px;margin-top: 8px;}',
    'p {background: Yellow;padding: 8px; margin-top: 8px}'
  ]
})

export class OnChangesComponent implements OnChanges {
  @Input() hero: Hero;
  @Input() power: string;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}:currentValue = ${cur},previousValue=${prev}`);
    }
  }
  reset() { this.changeLog.length = 0; }
}

/**********************************/
@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['.parent {background: Lavender}']
})

export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title: 'OnChanges';
  @ViewChild(OnChangesComponent) childview: OnChangesComponent;
  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('demng');
    this.power = 'sing';
    if (this.childview) {this.childview.reset();}
  }
}
