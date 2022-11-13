import React, { useEffect, useState } from 'react'
import { random } from '@moretime/utils'

export default () => {
  const [msg, setMsg] = useState('');

  const getRandomStr = () => setMsg(random.getRandomString())

  useEffect(getRandomStr, [])

  return <div>
    <div>
      随机字符串生成结果：
      <code>{msg}</code>
    </div>

    <div>
      <button onClick={getRandomStr}>再次生成</button>
    </div>
  </div>
}
