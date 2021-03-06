'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  memo: {
    type: 'string'
  },
  result: {
    type: 'string'
  },
  resultStatus: {
    type: 'enum',
    enums: Object.keys(utils.ALIPAY_PAYMENT_MESSAGE)
  }
};
module.exports = exports['default'];