import { type Ticket } from '../data/tickets.ts'

type Props = {
	data: Ticket[]
	onSelectTicket: (ticket: Ticket) => void
}

export default function Backlog({ data, onSelectTicket }: Props) {
	return (
		<>
			<h3>Backlog</h3>
			<ul>
				{data.map((ticket) => (
					<li
						key={ticket.id}
						onClick={() => onSelectTicket(ticket)}
					>
						{ticket.title}
					</li>
				))}
			</ul>
		</>
	)
}
