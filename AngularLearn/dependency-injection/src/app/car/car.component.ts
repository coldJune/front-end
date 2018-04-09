
import {Component} from "@angular/core";
import {simpleCar, superCar, testCar} from "./car-creations";
import {Car, Engine, Tires} from "./car";
import {CarFactory} from "./car-factory";
import {CarNoDi} from "./car-no-di";
import {useInjector} from "./car-injector";

@Component({
    selector: 'app-car',
    template: `
      <h2>Cars</h2>
      <div id="simple">{{simpleCar.drive()}}</div>
      <div id="super">{{superCar.drive()}}</div>
      <div id="test">{{testCar.drive()}}</div>
      <div id="factory">{{carFactory.drive()}}</div>
      <div id="carnodi">{{carNoDi.drive()}}</div>
      <div id="injector">{{injectorCar.drive()}}</div>
    `,
  providers: [Car, Engine, Tires]
})
export class CarComponent {
  simpleCar = simpleCar();
  superCar = superCar();
  testCar = testCar();
  carFactory = (new CarFactory).createCar();
  carNoDi = new CarNoDi;
  injectorCar = useInjector();
  constructor(public car: Car) {}
}
