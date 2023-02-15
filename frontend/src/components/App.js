class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      headline: 'React Application',
    }

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this)
  }

  handleChangeHeadline() {
    this.setState({
      headline: 'NEW HEADLINE!! 😃',
    }) //상태 변경 시도 -> React UI 업데이트(재조정 알고리즘)
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
        <button type="button" onClick={this.handleChangeHeadline}>
          헤드라인 변경
        </button>
      </div>
    )
  }
}

export default App
