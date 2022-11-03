import React from 'react'
import createHash from '../libs/createHash'

export default () => (
  <div>
    <div>使用默认模板：createHash():</div>
    <code>{createHash()}</code>
    <div>使用自定义模板：createHash('xxxx-xxxx-xxxx-xxxx'):</div>
    <code>{createHash('xxxx-xxxx-xxxx-xxxx')}</code>
  </div>
)
