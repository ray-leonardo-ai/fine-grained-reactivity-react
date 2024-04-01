import { type Ticket } from '../data/tickets.ts'
import useRenderCount from '../hooks/useRenderCount.ts'
import TicketSummary from './TicketSummary.tsx'

type Props = {
	myTickets: Ticket[]
}

export default function MyWork({ myTickets }: Props) {
	const renderCount = useRenderCount()
	return (
		<section>
			<h3>My Work</h3>
			<div>Render Count: {renderCount}</div>
			<ul>
				{myTickets.map((ticket) => (
					<li key={ticket.id}>
						<TicketSummary ticket={ticket} />
					</li>
				))}
			</ul>
		</section>
	)
}
