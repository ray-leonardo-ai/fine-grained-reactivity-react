import { useAtom } from 'jotai'
import { type Ticket } from '../data/tickets.ts'
import useRenderCount from '../hooks/useRenderCount.ts'
import { selectedTicketAtom, ticketsAtom } from './tickets-atom.ts'
import TicketSummary from './TicketSummary.tsx'

export default function Backlog() {
	const renderCount = useRenderCount()
	const [tickets] = useAtom(ticketsAtom)
	const [, setSelectedTicket] = useAtom(selectedTicketAtom)

	function handleSelectTicket(ticket: Ticket): void {
		setSelectedTicket(ticket)
	}

	return (
		<section>
			<h3>Backlog</h3>
			<div>Render Count: {renderCount}</div>
			<ul>
				{tickets.map((ticket) => (
					<li
						key={ticket.id}
						onClick={() => handleSelectTicket(ticket)}
					>
						<TicketSummary ticket={ticket} />
					</li>
				))}
			</ul>
		</section>
	)
}
