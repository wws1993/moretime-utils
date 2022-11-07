import React, { useEffect, useState } from 'react'
import {random} from '../../../index'

export default () => {
  const [msg, setMsg] = useState('');

  const getRandomStr = () => setMsg(random.getRandomString())

  useEffect(getRandomStr, [])

  return <div>
    <p>
      <code><b style={{color: 'red'}}>result</b>: {msg}</code>
    </p>
    <button onClick={getRandomStr}>refresh</button>
  </div>
}
