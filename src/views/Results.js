import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
	return(
		<main>
			<h1>These are your results</h1>
			<Link to="/">
				Start Over
			</Link>
		</main>
	)
}

export default Results;