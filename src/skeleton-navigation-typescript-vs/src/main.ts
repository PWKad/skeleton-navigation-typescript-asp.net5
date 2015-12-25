import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
// import JL from 'jsnlog';
import * as JL from 'jsnlog';
import * as toastr from 'toastr';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(a => a.setRoot());
}
