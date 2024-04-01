import { useAtom } from 'jotai/index'
import useRenderCount from '../hooks/useRenderCount.ts'
import { selectedTicketAtom } from './tickets-atom.ts'

export default function Issue() {
	const renderCount = useRenderCount()
	const [ticket] = useAtom(selectedTicketAtom)

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
				<div>Assignee: {ticket.assigneeId}</div>
				<div>Status: {ticket.status}</div>
			</div>
		</section>
	)
}
