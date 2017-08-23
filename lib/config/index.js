'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

Object.defineProperty(exports, 'RESPONSE_MESSAGE', {
  enumerable: true,
  get: function get() {
    return _api.RESPONSE_MESSAGE;
  }
});

var _methodTypes = require('./method-types');

Object.defineProperty(exports, 'METHOD_TYPES', {
  enumerable: true,
  get: function get() {
    return _methodTypes.METHOD_TYPES;
  }
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  ALIPAY_DEV_GETWAY: 'https://openapi.alipaydev.com/gateway.do',
  ALIPAY_GETWAY: 'https://openapi.alipay.com/gateway.do',
  ALIPAY_API_LIST: _defineProperty({
    'alipay.trade.query': '订单查询',
    'alipay.trade.app.pay': '生成创建订单所需参数',
    'async.notify': '异步通知',
    'alipay.trade.fastpay.refund.query': '统一收单交易退款查询',
    'alipay.trade.refund': '统一收单交易退款接口',
    'alipay.trade.precreate': '统一收单线下交易预创建'
  }, 'alipay.trade.query', '统一收单线下交易查询'),
  ALIPAY_GETWAY_MESSAGE: {
    10000: '接口调用成功',
    20000: '服务不可用',
    20001: '授权权限不足',
    40001: '缺少必选参数',
    40002: '非法的参数',
    40004: '业务处理失败',
    40006: '权限不足'
  },
  ALIPAY_NOTIFY_SUCCESS: 'success',
  ALIPAY_NOTIFY_FAILURE: 'failure',
  ALIPAY_ALGORITHM_MAPPING: {
    RSA: "RSA-SHA1",
    RSA2: "RSA-SHA256"
  }
};