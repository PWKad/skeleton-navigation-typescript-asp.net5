import {Base} from './base';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Child extends Base {
  constructor(element: Element) {
    super(element);
  }
  attached() {
    super.attached();
  }
}
