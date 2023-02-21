import React from 'react'
import spinnerURL, { ReactComponent as Spinner } from '../../assets/spinner.svg'

console.log(spinnerURL)
console.log(Spinner)
let API_ENDPOINT = 'https://randomuser.me/api/?results=5'

class LifeCycle extends React.Component {
  /* render 단계 ------------------------------------------------------------ */

  state = {
    // 로딩 중인가요? (데이터 패치 요청했나요?)
    isLoading: false,
    // 통신 결과가 도착했나요?
    data: [],
    // 오류는 어떤 정보(상태 코드, 메시지)를 가지고 있나요?
    error: null,
    // 혹시 오류가 발생했나요?
    // hasError: false,
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          role="alert"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Spinner title='로딩 중...'/>
        </div>
      )
    }
    return (
      <>
        <button
          type="button"
          onClick={() => this.fetchRandomPeople(API_ENDPOINT)}
        >
          다양한 사람들을 보고 싶어요!
        </button>

        {/* <ul>
          <li></li>
        </ul> */}
      </>
    )
  }

  /* commit 단계 ------------------------------------------------------------ */
  async fetchRandomPeople(endpoint) {
    // Random User API 서버에 요청
    this.setState({
      isLoading: true,
    })

    const response = await fetch(endpoint)

    if (!response.ok) {
      console.error(response.status, response.statusText)
      return
    }

    const data = await response.json()

    console.log(data)
  }

  // 컴포넌트가 마운트 된 이후
  // 마운트 (1회 실행)
  componentDidMount() {
    // API 요청/응답
    // fetch API
    // this.fetchRandomPeople(API_ENDPOINT)

    // 바닐라 프로그래밍 (React가 아닌 것 === 사이드 이펙트)
    // 명령형 프로그래밍
    const lifecycleElement = document.querySelector('.LifeCycle')
    const selectMeInput = document.getElementById('select-me')

    if (lifecycleElement) {
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

  // 컴포넌트가 업데이트 된 이후
  // 업데이트 (N회)
  componentDidUpdate() {
    console.log('우리 컴포넌트가 변경되었어요~')
  }
}

// 기본 내보내기
export default LifeCycle
