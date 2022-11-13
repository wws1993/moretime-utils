import React, { useEffect, useState } from 'react'
import { random } from '@moretime/utils'
import { Checkbox, Typography } from 'antd';

export default () => {
  const [msg, setMsg] = useState('');
  const [tmp, setTmp] = useState('yyyy-****-****-****');
  const [ops, setOps] = useState<random.TRandomStringOptions>({
    includes: ['number', 'lower-case'],
    randomKeyword: '*'
  })

  const getRandomStr = () => setMsg(random.getRandomString(tmp, ops))

  useEffect(getRandomStr, [])

  return <>
    <Typography>
      <Typography.Title level={5}>编辑字符串模板：</Typography.Title>
      <input defaultValue={tmp} onInput={e => setTmp(e.target.value)} />
    </Typography>

    <div>
      <Typography.Title level={5}>字符串类型库：</Typography.Title>
      <Checkbox.Group
        options={['number', 'lower-case', 'upper-case', 'special-char']}
        defaultValue={ops.includes}
        onChange={e => setOps({...ops, includes: e})}
      />
    </div>

    <div>
      <Typography.Title level={5}>关键字：</Typography.Title>
      <input defaultValue={ops.randomKeyword} onInput={e => setOps({...ops, randomKeyword: e.target.value})} />
    </div>

    <div>
      随机字符串生成结果：
      <code>{msg}</code>
    </div>

    <div>
      <button onClick={getRandomStr}>refresh</button>
    </div>
  </>
}
