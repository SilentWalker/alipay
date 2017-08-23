export { RESPONSE_MESSAGE } from './api'
export { METHOD_TYPES } from './method-types'

export default {
  ALIPAY_DEV_GETWAY: 'https://openapi.alipaydev.com/gateway.do',
  ALIPAY_GETWAY: 'https://openapi.alipay.com/gateway.do',
  ALIPAY_API_LIST: {
    'alipay.trade.query': '订单查询',
    'alipay.trade.app.pay': '生成创建订单所需参数',
    'async.notify': '异步通知',
    'alipay.trade.fastpay.refund.query' : '统一收单交易退款查询',
    'alipay.trade.refund' : '统一收单交易退款接口',
    'alipay.trade.precreate' : '统一收单线下交易预创建',
    'alipay.trade.query' : '统一收单线下交易查询'
  },
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
}