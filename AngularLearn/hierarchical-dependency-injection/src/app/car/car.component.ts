import {CarService, CarService2, CarService3, EngineService, EngineService2, TiresService} from "./car.service";
import {Component} from "@angular/core";

@Component({
  selector: 'c-car',
  template: `<div>C: {{description}}</div>`,
  providers: [{provide: CarService, useClass: CarService3}]
})
export class  CCarComponent {
  description: string;
  constructor(carService: CarService) {
    this.description = `${carService.getCar().description} (${carService.name})`;
  }
}

/////////////////////////
@Component({
  selector: 'b-car',
  template: `
    <div>B: {{declarations}}</div>
    <c-car></c-car>
  `,
  providers: [
    {provide: CarService, useClass: CarService2 },
    {provide: EngineService, useClass: EngineService2 }
  ]
})
export class BCarComponent {
  declarations: string;
  constructor(carService: CarService) {
    this.declarations = `${carService.getCar().description}(${carService.name})`;
  }
}
//////////////////////
@Component({
  selector: 'a-car',
  template: `
    <div>A: {{description}}</div>
    <b-car></b-car>
  `,
})
export class ACarComponent {
  description: string;
  constructor(carService: CarService){
    this.description = `${carService.getCar().description}(${carService.name})`;
  }
}
///////////////
@Component({
  selector: 'app-cars',
  template: `
    <h3>Cars</h3>
    <a-car></a-car>
  `
})
export class CarsComponent {}
/////////////
export  const carComponents = [
  CarsComponent,
  ACarComponent,
  BCarComponent,
  CCarComponent
];

export const carService = [
  CarService, EngineService, TiresService
];
