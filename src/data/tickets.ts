export type Ticket = {
	id: number
	title: string
	description: string
	status: 'open' | 'in progress' | 'done'
	assignee: string
}

export const tickets: Ticket[] = [
	{
		id: 1,
		title: 'Create a new ticket',
		description: 'Create a new ticket in the database',
		status: 'open',
		assignee: 'Alice',
	},
	{
		id: 2,
		title: 'Update a ticket',
		description: 'Update a ticket in the database',
		status: 'in progress',
		assignee: 'Bob',
	},
	{
		id: 3,
		title: 'Delete a ticket',
		description: 'Delete a ticket in the database',
		status: 'done',
		assignee: 'Charlie',
	},
]
