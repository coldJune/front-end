
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Jim'},
      {id: 2, name: 'Aim'},
      {id: 3, name: 'Sim'},
      {id: 4, name: 'Dim'},
      {id: 5, name: 'Fim'},
      {id: 6, name: 'Cim'},
      {id: 7, name: 'Zim'}
    ];
    return {heroes};
  }
}
