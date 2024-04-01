import { type Ticket } from '../data/tickets.ts'

type Props = {
	ticket: Ticket
}

export default function Issue({ ticket }: Props) {
	return (
		<>
			<h3>Ticket</h3>

			<div className='ticket-fields'>
				<div>Title: {ticket.title}</div>
				<div>Assignee: {ticket.assignee}</div>
				<div>Status: {ticket.status}</div>
			</div>
		</>
	)
}
