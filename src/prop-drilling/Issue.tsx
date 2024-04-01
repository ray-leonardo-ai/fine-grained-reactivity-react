import { type Ticket } from '../data/tickets.ts'
import useRenderCount from '../hooks/useRenderCount.ts'

type Props = {
	ticket: Ticket | null
}

export default function Issue({ ticket }: Props) {
	const renderCount = useRenderCount()

	if (!ticket)
		return (
			<section>
				<h3>Ticket</h3>
				<div>No ticket selected</div>
			</section>
		)

	return (
		<section>
			<h3>Ticket</h3>

			<div className='ticket-fields'>
				<div>Render Count: {renderCount}</div>
				<div>Title: {ticket.title}</div>
				<div>Assignee: {ticket.assignee}</div>
				<div>Status: {ticket.status}</div>
			</div>
		</section>
	)
}
