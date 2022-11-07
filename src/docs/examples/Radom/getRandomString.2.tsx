import React, { useEffect, useState } from 'react'
import {random} from '../../../index'

export default () => {
  const [msg, setMsg] = useState('');
  const [tmp, setTmp] = useState('yyyy-****-****-****');

  const getRandomStr = () => setMsg(random.getRandomString(tmp))

  useEffect(getRandomStr, [])

  return <div>
    <p>
      <label >template for string</label>
      <input type="text" placeholder='please write template here...' value={tmp} onInput={e => setTmp(e.target.value)} />
    </p>

    <p>
      <code><b style={{color: 'red'}}>result</b>: {msg}</code>
    </p>
    <button onClick={getRandomStr}>refresh</button>
  </div>
}
