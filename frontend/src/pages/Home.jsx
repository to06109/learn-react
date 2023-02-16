class Home extends React.Component {
  state = {}

  render() {
    const handlePreventDefault = (e) => {
      e.preventDefault()
    }

    const handleClicker = (e) => {
      console.log(e.target)
      console.log('handleClicker')
    }

    return (
      <>
        <h2>설명 목록 리스트 렌더링</h2>
        <nav onClickCapture={handleClicker}>
          <ul>
            <li>
              <a
                href="https://beta.react.js.org"
                onClick={handlePreventDefault}
              ></a>
              react
            </li>
            {/* <li><a href=""></li>
          <li><a href=""></li> */}
          </ul>
        </nav>
      </>
    )
  }
}

export default Home
