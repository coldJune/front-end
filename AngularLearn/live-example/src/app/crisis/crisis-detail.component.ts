import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  template: `
    <h3 highlight>Crisis Detail</h3>
    <div >Crisis id:{{id}}</div>
    <br>
    <a routerLink="../list">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit{
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }
}
