'use strict';

import PhonecatDetailCtrl from './phone_detail.controller';

export default angular.module('phonecat.detail', [
	'ngRoute',
	'ngAnimate',
	'phonecat.core'
])
	.controller('PhoneDetailCtrl', PhonecatDetailCtrl);


