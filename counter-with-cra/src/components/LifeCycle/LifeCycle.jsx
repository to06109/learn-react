import React from 'react'
import styles from './LifeCycle.module.css'
import spinnerURL, { ReactComponent as Spinner } from '../../assets/spinner.svg'

let API_ENDPOINT = 'https://randomuser.me/api/?results=5'

class LifeCycle extends React.Component {
  /* render 단계 ------------------------------------------------------------ */

  state = {
    isLoading: false,
    data: [],
    error: null,
    hasError: false,
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
          <Spinner title="로딩 중..." />
        </div>
      )
    }
    return (
      <div className={styles.container}>
        <button
          type="button"
          onClick={() => this.fetchRandomPeople(API_ENDPOINT)}
        >
          다양한 사람들을 보고 싶어요!
        </button>

        <ul>
          {this.state.data.map((user) => (
            <li key={user.cell}>{user.email}</li>
          ))}
        </ul>
      </div>
    )
  }

  /* commit 단계 ------------------------------------------------------------ */
  // Random User API 서버에 요청
  async fetchRandomPeople(endpoint) {
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      this.setState({
        data: data.results,
      })
    } catch (error) {
      this.setState({
        error: {
          message: error.message,
        },
        hasError: true,
      })
    } finally {
      this.setState({
        isLoading: false,
      })
    }
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
