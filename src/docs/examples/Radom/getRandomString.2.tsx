import React, { useEffect, useState } from 'react'
import { random } from '@moretime/utils'

export default () => {
  const [msg, setMsg] = useState('');
  const [tmp, setTmp] = useState('yyyy-****-****-****');

  const getRandomStr = () => setMsg(random.getRandomString(tmp))

  useEffect(getRandomStr, [])

  return <div>
    <div>
      <label>编辑字符串模板：</label>
      <input defaultValue={tmp} onInput={e => setTmp(e.target.value)} />
    </div>

    <div>
      随机字符串生成结果：
      <code>{msg}</code>
    </div>

    <div>
      <button onClick={getRandomStr}>refresh</button>
    </div>
  </div>
}
