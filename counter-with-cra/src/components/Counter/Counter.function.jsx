import { useState } from 'react'

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount)

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    setCount(count + step)
  }

  // only class component
  // lifecycle methods

  const handleDecrement = () => {
    setCount(count - step)
  }

  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <output>{count}</output>
      {/* <output>{count}</output> */}
      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}

export default Counter
