import './App.css'
// import { App as PropDrilling } from './prop-drilling/App'
import { App as Atoms } from './atoms/App'

function App() {
	return (
		<>
			<h1>Derived Data</h1>

			{/*<PropDrilling />*/}
			<Atoms />
		</>
	)
}

export default App
