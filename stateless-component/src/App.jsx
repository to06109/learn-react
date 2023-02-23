import classes from './App.module.css'
import { Button, A11yHidden } from './components'

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
        <section>
          <A11yHidden as="h2">접근성 준수한 제목</A11yHidden>
          <p>
            Lorem ipsum <a href="dolor"></a> sit amet consectetur adipisicing
            elit. Laboriosam temporibus aperiam magni deserunt libero quos,
            autem corporis nisi doloribus odit voluptatibus neque reprehenderit,
            nesciunt vel in facilis quam? Amet, autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            temporibus aperiam magni deserunt libero quos, autem corporis nisi
            doloribus odit voluptatibus neque reprehenderit, nesciunt vel in
            facilis quam? Amet, autem.
          </p>
        </section>
        {/*         
        <A11yHidden as="h2">저장</A11yHidden>
        <A11yHidden as="a">저장</A11yHidden>
        <A11yHidden as="figcaption">저장</A11yHidden> */}
      </div>
    </div>
  )
}

export default App
