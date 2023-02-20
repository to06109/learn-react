import './App.css'
import Counter from '../components/Counter'

function App() {
  return (
    <div className="App">
      <Counter count={1} />
      <Counter count={3} />
      <Counter count={9} />
    </div>
  )
}
export default App
