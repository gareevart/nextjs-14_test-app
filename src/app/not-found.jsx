"use client"

import Link from 'next/link'

const NotFound = () => {
	return (
		<div>
			<h1>Stranica nije pronađena</h1>
			<p>Stranica nije pronađena na web mjestu</p>
			<Link href="/">Na početnu stranicu</Link>
		</div>
	)
}

export default NotFound