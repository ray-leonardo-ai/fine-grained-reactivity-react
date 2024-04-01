export type Ticket = {
	id: string
	title: string
	description: string
	status: 'open' | 'in progress' | 'done'
	assigneeId: number
}

export const tickets: Ticket[] = [
	{
		id: 'LEO-0001',
		title: 'Create DB table',
		description: 'Create a new table in the database',
		status: 'open',
		assigneeId: 1,
	},
	{
		id: 'LEO-0002',
		title: 'Update a ticket',
		description: 'Update a ticket in the database',
		status: 'in progress',
		assigneeId: 2,
	},
	{
		id: 'LEO-0003',
		title: 'Delete a ticket',
		description: 'Delete a ticket in the database',
		status: 'done',
		assigneeId: 3,
	},
]
