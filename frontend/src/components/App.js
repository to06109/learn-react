class App extends React.Component {
  // 조건부 렌더링 (CSR) vs. 조건부 표시 (CSS : display, visibility, overflow, opacity)
  // React (JavaScript) vs. Vue (directives: v-if, v-show)

  // OTT (구독 === 돈!!!!)
  // 구독자 (인증, 권한)
  // 회원가입 → 로그인
  // 서비스 이용 (display: none; )

  // 선언형
  // React 처럼 생각하기
  state = {
    headline: 'React Application',
    // isUpdateHeadline: false,
    isToggle: false,
    isLoading: !true,
    hasError: null, // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
  }

  // 클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다.
  // 그럼 함수는? 못한다. 이걸 가능하게 해준게 React Hook (useRef)
  // 메모이제이션 패턴
  originalHeadline = this.state.headline
  willUpdateHeadlibe = 'NEW HEADLINE!! 😃'

  handleChangeHeadline = () => {
    // 조건 처리
    // 문을 사용할 것인가?
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline,
      })
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadlibe,
      })
    }
  }

  render() {
    const { isToggle, headline } = this.state

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div>
    }

    if (this.state.hasError) {
      return <div role="alert">{this.state.hasError.message}</div>
    }

    // `style` prop object!!!!!!!!
    const hiddenStyle = { display: 'none' }

    return (
      <div data-component="App">
        <h1 style={hiddenStyle}>{headline}</h1>
        <button
          // disabled={isUpdateHeadline}
          type="button"
          onClick={this.handleChangeHeadline}
        >
          {isToggle ? '오리지널 헤드라인으로 변경' : '새로운 헤드라인으로 변경'}
        </button>
      </div>
    )
  }
}

export default App
