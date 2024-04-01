import Backlog from './Backlog.tsx'
import Issue from './Issue.tsx'
import MyWork from './MyWork.tsx'

export function App() {
	/**
	 * ATOM Pattern for state management
	 * As used in Jotai, Recoil, etc.
	 * The state of the app is kept in a global store and accessed by the child components
	 * Derived state is computed using selectors
	 */
	return (
		<>
			<h3>Atom-based state management</h3>

			<div className='app'>
				<Backlog />
				<Issue />
				<MyWork />
			</div>
		</>
	)
}
