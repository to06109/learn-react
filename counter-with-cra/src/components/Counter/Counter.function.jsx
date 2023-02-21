import { useState } from 'react'

// imn : import no module
// import './Counter.style.css'

// imd : import destructuring
// imp : import
import styles from './Counter.module.css'

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    setCount(count + step)
  }

  const handleDecrement = () => {
    setCount(count - step)
  }

  return (
    <div className={styles.container}>
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
