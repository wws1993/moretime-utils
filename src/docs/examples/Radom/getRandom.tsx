import React from 'react'
import {Random} from '@moretime/utils'

export default () => (
  <div>
    <div>使用默认模板：Random.getHash(): {Random.getHash()}</div>
    <div>使用自定义模板：Random.getHash('xxxx-xxxx-xxxx-xxxx'): {Random.getHash('xxxx-xxxx-xxxx-xxxx')}</div>
  </div>
)
