import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * jsx 문법 규칙
 * 1. 꼭 하나의 묶음이여야한다
 * 2. 열었으면 닫아야한다
 * 3. 변수 또는 특정 값을 표현할때 중괄호를 작성한다
 * 4. 
 * 
 */
/**
 * 컴포넌트()란
 * 1. jsx를 린턴하는 함수
 * 2. 모듈화(부품) -> 재사용ㅇ의 목적, 코드 분리의 목적
 * 3. 매개변수는 properties(props)라는 객체 하나만 허용한다//프롭스
 * 4. 구조분해를 통해 props를 정의해두면 호출하는 위치에서 자동완성을 사용할수있다
 * 
 */
function PBox () {
  return <div>
    <CBox a="dfs" b="33"/>
    
  </div>
}
function CBox({a, b}) {//const [a, b] = p;//객체니깐 구조 분해 가능
  console.log(p);
  
  return <Fragment>
    <h1>권민주</h1>
    <h2>나이</h2>
  </Fragment>
}

createRoot(document.getElementById('root')).render(<PBox />)
