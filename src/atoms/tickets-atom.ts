import { atom } from 'jotai'
import { type Ticket, tickets } from '../data/tickets.ts'

export const ticketsAtom = atom(tickets)

export const selectedTicketAtom = atom<Ticket | null>(null)
