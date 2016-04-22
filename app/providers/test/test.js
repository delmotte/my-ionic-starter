import {Injectable} from 'angular2/core';

let id = 1;

/*
  Generated class for the Test provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Test {

  constructor() {
    this.data = [{id: 0}];
  }

  pushData() {
    this.data.push({id: id++});
  }

  removeData() {
    this.data.pop();
  }

  getData() {
    return this.data;
  }

}

