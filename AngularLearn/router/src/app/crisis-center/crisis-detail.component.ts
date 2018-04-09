import {Component, HostBinding, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {slideInDownAnimation} from "../animations";
import {DialogService} from "../dialog.service";
import {Crisis} from "./crisis.service";
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
   <div *ngIf="crisis">
     <h3>"{{editName}}"</h3>
     <div>
       <label>Id：</label>{{crisis.id}}
     </div>
     <div>
       <label>Name:</label>
       <input [(ngModel)]="editName" placeholder="name">
     </div>
     <p>
       <button (click)="save()">Save</button>
       <button (click)="cancel()">Cancel</button>
     </p>
   </div>
  `,
  styles: ['input {width: 20em;}'],
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(( data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  gotoCrisis() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes');
  }
  cancel() {
    this.gotoCrisis();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrisis();
  }
}
