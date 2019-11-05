

import request from '@/utils/request'
export function getGoodsDetail() {
    return request({
      url: '/mallUser/goods/goodsDetail?goodsId=138',
      method: 'get'
    })
}