import {autoinject, inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Base} from './base';
import * as ko from 'knockout';
import 'fetch';

@autoinject
export class Users extends Base {
  heading = ko.observable('Github Users');
  users = ko.observableArray([]);
  computedUsers = ko.computed(() => {
    return this.users();
  });

  constructor(private http: HttpClient, element: Element) {
    super(element);
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users(users));
  }
}
