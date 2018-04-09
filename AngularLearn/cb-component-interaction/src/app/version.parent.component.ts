import {Component} from "@angular/core";

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">new minor version</button>
    <button (click)="newMajor()">new major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})

export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
