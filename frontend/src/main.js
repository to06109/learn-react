import App from './components/App.js'

const { StrictMode } = React
const { createRoot } = ReactDOM

const reactDomRoot = createRoot(document.getElementById('root'))

reactDomRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
