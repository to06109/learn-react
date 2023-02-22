import React from 'react'
import './App.css'
import { CounterFunction, CounterClass, Button, LifeCycle } from '../components'

import { API_ENDPOINT } from '../components/LifeCycle/LifeCycle'

function renderComponents(isVisible) {
  if (isVisible) {
    return (
      <>
        <h2>함수 컴포넌트</h2>
        <CounterFunction count={2} />
        <h2>클래스 컴포넌트</h2>
        <CounterClass step={3} />
        <h2>버튼 컴포넌트</h2>
        <Button />
      </>
    )
  } else {
    return null
  }
}

// 함수 컴포넌트
// React v16.8 (2019)
// - 상태 관리 React.useState
// - 사이드 이펙트 관리 React.useEffect
function App() {
  // 관심사의 분리
  // 앱의 로딩 상태
  // 로딩 이후, 데이터 관리
  // 로딩 이후, 통신 실패 -> 오류 처리

  // component state = {isLoading, error, data} 클래스 컴포넌트는 하나로 묶어서 관리
  // 함수 컴포넌트는 하나씩 관리
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState('')

  // 사이드 이펙트 처리 훅
  React.useEffect(() => {
    console.log('componentDidMount')
  }, [])

  React.useEffect(() => {
    // 만약 여기서 네트워느 요청 / 응답을 처리한다면?
    // 데이터 요청 -> 상태 업데이트 -> 리렌더링
    // ...
    console.log('componentDidUpdate')
  })

  // ----------------------------------------------------------------------------

  // React 상태 관리 훅(Hook)
  // 상태 변수(state variable)
  const [isVisibleComponents, updateIsVisibleComponents] = React.useState(false)

  // 함수 안에 이벤트 핸들러 작성
  const handleToggleVisible = () => {
    updateIsVisibleComponents(!isVisibleComponents)
  }

  return (
    <div className="App">
      <button type="button" onClick={handleToggleVisible}>
        {isVisibleComponents.toString()}
      </button>
      <h2>라이프 사이클</h2>
      {isVisibleComponents && <LifeCycle />}
      {renderComponents(isVisibleComponents)}
    </div>
  )
}
export default App
