import React from 'react'

// Component's Life Cycle (컴포넌트의 생명주기)
// 탄생 (constructor: 1번) -> (render: N번)
// 성장
// 죽음

class LifeCycle extends React.Component {
  /* render 단계 ------------------------------------------------------------ */

  state = {
    message: 'loading...',
  }

  render() {
    // console.log(document.querySelector('.LifeCycle')) // null
    return (
      <>
        <div className="LifeCycle" tabIndex={0}>
          컴포넌트의 생명 주기
        </div>
        <input
          id="select-me"
          type="text"
          placeholder="위에 요소를 클릭하면 초점이 내게 와요~"
          aria-label="나를 선택하세요"
        />
      </>
    )

    // return React.createElement(
    //   'div',
    //   { className: 'LifeCycle' },
    //   '컴포넌트의 생명 주기'
    // );
  }

  /* commit 단계 ------------------------------------------------------------ */

  // - 실제 DOM에 접근, 조작 (DOM 스크립트 또는 Vanilla 스크립트)

  // 컴포넌트가 마운트 된 이후
  // 마운트 (1회 실행)
  componentDidMount() {
    // 바닐라 프로그래밍 (React가 아닌 것 === 사이드 이펙트)
    // 명령형 프로그래밍
    const lifecycleElement = document.querySelector('.LifeCycle')
    const selectMeInput = document.getElementById('select-me')

    // click : mouse event (a11y)
    // focusable element
    lifecycleElement.addEventListener('click', (e) => {
      e.target.style.cssText = `
        background: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
      `

      // 문서의 input 요소를 찾아서 초점을 이동
      setTimeout(() => {
        selectMeInput.value = '나! 선택받았어~~'
        selectMeInput.select()
      }, 1500)
    })

    lifecycleElement.addEventListener('keyup', (e) => {
      // enter 눌렀을 때
      if (e.key.toLowerCase().includes('enter')) {
        lifecycleElement.click()
      }
    })
  }
}

// 기본 내보내기
export default LifeCycle
