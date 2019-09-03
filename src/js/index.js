'use strict';

require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');


// export default function name() {};
// import name from './modules/name';

import test from './modules/test';

window.addEventListener('DOMContentLoaded', () => {

  test();

});