import { useState } from 'react'
import { type Ticket, tickets } from '../data/tickets.ts'
import Backlog from './Backlog.tsx'
import Issue from './Issue.tsx'
import MyWork from './MyWork.tsx'

export function App() {
	/**
	 * PROP DRILLING
	 * The state of the app is kept at the root component and passed down to the child components as props
	 * Events are passed up to the parent component using passed in prop functions
	 */
	const [backlog] = useState(tickets)
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
	const [myWork] = useState<Ticket[]>(backlog.filter((ticket) => ticket.assigneeId === 'Alice'))

	return (
		<>
			<h3>Prop drilling</h3>

			<div className='app'>
				<Backlog
					data={backlog}
					onSelectTicket={(ticket) => setSelectedTicket(ticket)}
				/>

				<Issue ticket={selectedTicket} />

				<MyWork myTickets={myWork} />
			</div>
		</>
	)
}
