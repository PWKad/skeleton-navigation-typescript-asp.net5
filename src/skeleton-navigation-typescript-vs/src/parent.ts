import {Base} from './base';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Parent extends Base {
  constructor(element: Element) {
    super(element);
  }
  attached() {
    super.attached();
  }
}
