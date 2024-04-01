import { type Ticket } from '../data/tickets.ts'
import useRenderCount from '../hooks/useRenderCount.ts'

type Props = {
	ticket: Ticket
}

export default function TicketSummary({ ticket }: Props) {
	const renderCount = useRenderCount()
	const { title } = ticket

	return (
		<div className='ticket-summary'>
			<div>Render Count: {renderCount}</div>
			<div>{title}</div>
		</div>
	)
}
