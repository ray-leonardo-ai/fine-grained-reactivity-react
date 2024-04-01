import { useState } from 'react'
import { type Ticket, tickets } from '../data/tickets.ts'
import Backlog from './Backlog.tsx'
import Issue from './Issue.tsx'
import MyWork from './MyWork.tsx'

export function App() {
	const [backlog] = useState(tickets)
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
	const [myWork] = useState<Ticket[]>(backlog.filter((ticket) => ticket.assignee === 'Alice'))

	return (
		<>
			<h3>Prop drilling</h3>

			<div className='app'>
				<Backlog
					data={backlog}
					onSelectTicket={(ticket) => setSelectedTicket(ticket)}
				/>

				{selectedTicket && <Issue ticket={selectedTicket} />}

				<MyWork myTickets={myWork} />
			</div>
		</>
	)
}
