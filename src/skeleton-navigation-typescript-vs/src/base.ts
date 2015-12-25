import {EventAggregator} from 'aurelia-event-aggregator';
import {Container} from 'aurelia-dependency-injection';

export class Base {
  element;
  events;
  loadingVMs = [];
  constructor(element: Element) {
    let container = new Container();
    this.events = container.root.get(EventAggregator);
    this.loadingVMs.push(this);
    this.element = element;
    this._getEventAggregator();
  }
  _getEventAggregator() {
    this.events.subscribe('composition-complete', payload => {
      console.log('-- Composition is complete ')
      console.log(payload);
    });
  }
  attached() {
    let index = this.loadingVMs.indexOf(this);
    if (index > -1) {
      this.loadingVMs.splice(index, 1);
    }
    setTimeout(() => {
      if (this.loadingVMs.length === 0) {
        this.compositionComplete();
      }
    }, 100);
    ko.applyBindings(this, this.element);
  }
  compositionComplete() {
    this.events.publish('composition-complete')
  }
}
