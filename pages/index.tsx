function About({ isConnected }) {
	return (
		<div>
			About
			{isConnected ? (
				<p>MongoDB is connected</p>
			) : (
				<p>MongoDB is not connected</p>
			)}
		</div>
	)
}

export default About
