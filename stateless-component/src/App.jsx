import classes from './App.module.css'
import { Button } from './components'

function App() {
  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>
      <div role="group" className={classes.buttonGroup}>
        <Button onClick={handleClick}>회원가입</Button>
        <Button secondary onClick={handleClick}>
          로그인
        </Button>
        <Button disabled onClick={handleClick}>
          저장
        </Button>
      </div>
    </div>
  )
}

export default App
