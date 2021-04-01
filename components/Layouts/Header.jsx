import React, {Fragment} from 'react'
import {useRouter} from 'next/router'

export default function Header({ title }) {
  return (
  	<Fragment>
  		<Link href="/">Home</Link>
  		<Link href="/about">About</Link>
	  	<h1 className="title">{title}</h1>
	</Fragment>
  )
}

const Link = ({children, href}) => {
	const router = useRouter()
	const style = {
		marginRight: 10,
		color: router.asPath === href ? 'red' : 'black'
	}


	const handleClick = e => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	)
}
