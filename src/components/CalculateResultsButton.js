import React from 'react';
import { Link } from 'react-router-dom';


export default function CalculateResultsButton() {
	return(
		<button
			className="bg-green-800 text-white w-full md:w-1/4 py-2"
		>
			<Link to="/results">
				Calculate Results
			</Link>
		</button>
	)
}