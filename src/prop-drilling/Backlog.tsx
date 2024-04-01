import { type Ticket } from '../data/tickets.ts'
import useRenderCount from '../hooks/useRenderCount.ts'
import TicketSummary from './TicketSummary.tsx'

type Props = {
	data: Ticket[]
	onSelectTicket: (ticket: Ticket) => void
}

export default function Backlog({ data, onSelectTicket }: Props) {
	const renderCount = useRenderCount()

	return (
		<section>
			<h3>Backlog</h3>
			<div>Render Count: {renderCount}</div>
			<ul>
				{data.map((ticket) => (
					<li
						key={ticket.id}
						onClick={() => onSelectTicket(ticket)}
					>
						<TicketSummary ticket={ticket} />
					</li>
				))}
			</ul>
		</section>
	)
}
