import React from 'react'
import classes from './App.module.css'
import {
  CounterFunction,
  CounterClass,
  Button,
  LifeCycle,
  API_ENDPOINT,
} from 'components'
import { ReactComponent as ReactLogo } from 'assets/logo.svg'

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

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState('')

  // 사이드 이펙트 처리 훅
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        setData(data.results)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    console.log('componentDidUpdate')
  })

  // ----------------------------------------------------------------------------

  // React 상태 관리 훅(Hook)
  const [isVisibleComponents, updateIsVisibleComponents] = React.useState(false)

  // 함수 안에 이벤트 핸들러 작성
  const handleToggleVisible = () => {
    updateIsVisibleComponents(!isVisibleComponents)
  }

  return (
    <div className={classes.container}>
      <ReactLogo className={classes.logo} title="리액트 로고" />
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
