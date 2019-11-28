import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return(
		<main>
			<h1>Hello World</h1>
			<Link to="/results">
				Calculate Results
			</Link>
		</main>
	)
}

export default Home;