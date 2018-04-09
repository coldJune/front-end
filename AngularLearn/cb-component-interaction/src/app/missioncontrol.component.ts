
import {MissionService} from "./mission.service";
import {Component} from "@angular/core";
@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="annouce()">Announce mission</button>
    <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut" ]></app-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [MissionService]
})
export class MissioncontrolComponent {
  astronauts = ['cui', 'deng', 'jun'];
  history: string[] = [];
  missions = ['Fly to the moon',
              'Fly to mars',
              'Fly to Vegas'];
  nextMission = 0;
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronauts => {
        this.history.push(`${this.astronauts} confirmed the mission`);
    }
    );
  }
  annouce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {this.nextMission = 0; }
  }
}
