import { type Ticket } from '../data/tickets.ts'

type Props = {
	myTickets: Ticket[]
}

export default function MyWork({ myTickets }: Props) {
	return (
		<>
			<h3>MyWork</h3>

			{myTickets.map((ticket) => (
				<div key={ticket.id}>{ticket.title}</div>
			))}
		</>
	)
}
