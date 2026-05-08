import { useState } from 'react'
import * as s from './style'
import { css } from '@emotion/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div css={s.card}>
        <div css={s.inputBox}>
          <label htmlFor="username"></label>
          <input type="text" id='username' placeholder='사용자 이름' css={s.eachInput}/>
        </div>
        <div css={s.inputBox}>
          <label htmlFor="password"></label>
          <input type="password" id='password' placeholder='비밀번호' css={s.eachInput}/>
        </div>
        <button css={s.buttonBox} disabled={true}>사용자 정보 등록</button>
      </div>
    </>
  )
}

export default App
