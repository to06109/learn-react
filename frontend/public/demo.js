/* React 컴포넌트 -------------------------------------------------------------- */

// 일반함수 이름 : camelCase
// 컴포넌트 이름 : PascalCase

/* 함수 컴포넌트 ------------------------------------------------------------------ */

function AppLogo(props) {
  // props {color, outline}
  // fill or outline
  // red or white

  let imageSource = '/assets/logo/'
  imageSource += props.outline ? 'outline' : 'fill'
  imageSource += props.color === 'white' ? '-white' : '-red'

  let ext = 'svg'

  return <img src={`${imageSource}.${ext}`} alt="Netflix" />
}

function AppHomeLink() {
  return (
    <h1>
      <a href="https://netflix.com/"></a>
    </h1>
  )
}

function AppSearch() {
  return (
    <form role="search">
      <label htmlFor="search">검색</label>
      <input id="search" type="search" />
    </form>
  )
}

function AppNav() {
  return (
    <nav aria-label="">
      <ul>
        <li>
          <a href="">link 1</a>
        </li>
        <li>
          <a href="">link 2</a>
        </li>
        <li>
          <a href="">link 3</a>
        </li>
      </ul>
    </nav>
  )
}

// pure(function) to ~: 함수를 클래스로 바꿔주는 extention

// props.logoType.shape
// props.logoType.color
class AppHeader extends React.Component {
  state = {
    outline: false,
    color: 'red',
  }

  render() {
    const { logoType } = this.props

    return (
      <header>
        <AppLogo
          outline={logoType.shape.includes('outline') ? true : false}
          color={logoType.color}
        />

        <div role="group">
          <button
            type="button"
            onClick={() => {
              this.setState({
                outline: !this.state.outline,
              })
            }}
          >
            change logo type is outline
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('clicked button 2')
            }}
          >
            change logo type is fill
          </button>
        </div>

        {/* <AppLogo outline /> */}
        {/* <AppLogo color="white" /> */}
        {/* <AppLogo color="white" outline /> */}

        <AppSearch />
        <AppNav />
      </header>
    )
  }
}

// function AppHeader({ logoType: { shape, color } }) {
//   // 업데이트 조건 3가지
//   // 1. state 변경
//   // 2. props 변경
//   // 3. forceUpdate() 실행 !important <- 거의 쓸 일 없음

//   return (
//     <header>
//       {/* red, fill */}
//       <AppLogo
//         outline={shape.include('outline') ? true : false}
//         color={color}
//       />

//       <div role="group">
//         <button
//           type="button"
//           onClick={() => {
//             console.log('clicked button 1')
//           }}
//         >
//           change logo type is outline
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             console.log('clicked button 2')
//           }}
//         >
//           change logo type is fill
//         </button>
//       </div>

//       {/* <AppLogo outline /> */}
//       {/* <AppLogo color="white" /> */}
//       {/* <AppLogo color="white" outline /> */}

//       <AppSearch />
//       <AppNav />
//     </header>
//   )
// }

function AppMain() {
  return (
    <main>
      <AppLogo />
      <p>앱 메인 정보를 입력합니다.</p>
    </main>
  )
}

function AppFooter() {
  return (
    <footer>
      <AppLogo />
      <address>
        <small>저작권 정보</small>
      </address>
    </footer>
  )
}

/* 클래스 컴포넌트 ----------------------------------------------------------------- */
// - 2018년까지는....
// - 클래스 컴포넌트는 상태를 가질 수 있다.
// - 함수 컴포넌트는 상태를 가질 수 없다.

class App extends React.Component {
  constructor(props) {
    super(props)

    // 컴포넌트 상태
    // 애플리케이션의 상태
    // 상태 업데이트 → 다시 렌더링!!!
    // 선언형 프로그래밍
    this.state = {
      logoType: {
        shape: 'outline',
        color: 'red',
      },
    }
  }

  render() {
    // const {  } = this.props;

    return (
      <div className="app">
        <AppHeader logoType={this.state.logoType} />
        <AppMain />
        <AppFooter />
      </div>
    )
  }
}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'))

reactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
