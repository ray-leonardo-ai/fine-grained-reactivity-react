import { useEffect, useRef } from 'react'

export default function useRenderCount() {
	const ref = useRef(1)

	// Will run on every render
	useEffect(() => {
		ref.current += 1
	})

	return ref.current
}
