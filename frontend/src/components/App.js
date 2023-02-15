class App extends React.Component {
  // 2022 6. 표준 기술
  // public, private 클래스 필드, 피처

  state = {
    headline: 'React Application',
    // isUpdateHeadline: false,
    isToggle: false,
  }

  // 클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다.
  // 그럼 함수는? 못한다. 이걸 가능하게 해준게 React Hook (useRef)
  // 메모이제이션 패턴
  originalHeadline = this.state.headline

  handleChangeHeadline = () => {
    this.setState({
      headline: this.state.isToggle
        ? 'NEW HEADLINE!! 😃'
        : this.originalHeadline,
      // isUpdateHeadline: true,
      isToggle: !this.state.isToggle,
    }) //상태 변경 시도 -> React UI 업데이트(재조정 알고리즘)
  }

  render() {
    const { headline, isUpdateHeadline } = this.state
    return (
      <div data-component="App">
        <h1>{headline}</h1>
        {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
        <button
          // disabled={isUpdateHeadline}
          type="button"
          // onClick={this.handleChangeHeadline.bind(this)}
          onClick={this.handleChangeHeadline}
        >
          헤드라인 변경
        </button>
      </div>
    )
  }
}

export default App
