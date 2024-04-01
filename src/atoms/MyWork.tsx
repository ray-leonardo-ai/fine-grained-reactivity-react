import { useAtom } from 'jotai/index'
import useRenderCount from '../hooks/useRenderCount.ts'
import { ticketsAtom } from './tickets-atom.ts'
import TicketSummary from './TicketSummary.tsx'

export default function MyWork() {
	const renderCount = useRenderCount()
	const [myTickets] = useAtom(ticketsAtom)
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
