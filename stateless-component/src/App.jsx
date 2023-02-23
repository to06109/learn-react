import React, { useState } from 'react'
import classes from './App.module.css'
import { Button, A11yHidden, Nav } from './components'

function App() {
  const [navList] = useState([
    { id: 'item-1', text: '과자', to: '#snack' },
    { id: 'item-2', text: '호박', to: '#pumpkin' },
    { id: 'item-3', text: '아이스크림', to: '#icecream' },
    { id: 'item-4', text: '수박', to: '#watermelon' },
    { id: 'item-5', text: '치킨', to: '#chicken' },
  ])

  return (
    <div className={classes.container}>
      {/* <SkipToContent /> */}
      <Nav as="h3" headline="상품 목록" list={navList} />
      <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>
      <div role="group" className={classes.buttonGroup}>
        <Button onClick={handleClick}>회원가입</Button>
        <Button secondary>로그인</Button>
        <section id="snack">
          <A11yHidden as="h2" focusable>
            맛있는 과자~
          </A11yHidden>
          <p>
            <A11yHidden as="a" href="#invisible" focusable>
              Lorem ipsum
            </A11yHidden>{' '}
            <a href="dolor">dolor</a> sit amet consectetur adipisicing elit.
            Laboriosam temporibus aperiam magni deserunt libero quos, autem
            corporis nisi doloribus odit voluptatibus neque reprehenderit,
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
