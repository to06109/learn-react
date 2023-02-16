import LogIn from './pages/Login.js'
import Browse from './pages/Browse.js'
import Home from './pages/Home.js'

class App extends React.Component {
  state = {
    headline: 'React Application',
    isPaid: true,
    isToggle: false,
    isLoading: !true,
    hasError: null,
  }

  originalHeadline = this.state.headline
  willUpdateHeadlibe = 'NEW HEADLINE!! 😃'

  handleChangeHeadline = () => {
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
    const { isLoading, isToggle, isPaid, headline, hasError } = this.state

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div>
    }

    if (hasError) {
      return <div role="alert">{hasError.message}</div>
    }

    return <Home />

    return (
      <div className="App">
        <h1>{headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          {isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경'}
        </button>
        <LogIn />
        {isPaid && <Browse />}
      </div>
    )
  }
}

export default App
