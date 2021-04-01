import Head from 'next/head'
import {Header} from '../components'

const About = () => {
	return (
		<div className="container">
			<Head>
				<title>About Nabilla</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header title="About Nabilla Bakery" />
			<h1>About Page</h1>
		</div>
	)
}

export default About