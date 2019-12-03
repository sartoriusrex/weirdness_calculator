import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import LikesList from '../components/LikesList';

// actions
import { resetLikes } from '../store/actions/likes';
import { resetSearch } from '../store/actions/search';


const Results = props => {
	const { likes, resetLikes, resetSearch } = props;

	// Extract all weirdness scores from gifs in Likes list and average them using reduce, rounded to the nearest integer
	const weirdnessScore = Math.round( likes
		.map( gif => gif.weirdness )
		.reduce( ( acc, curr, idx, src ) => acc += curr / src.length, 0 ));

	function resetApp(){
		resetLikes();
		resetSearch();
	}

	return(
		<main className="flex flex-col md:w-1/2 mx-2 items-center md:mx-auto">
			<h1 
				className="text-4xl text-purple-800 text-center my-4"
			>How Weird Are You?</h1>

			<h4
				className="text-2xl mb-6 text-center"
			>Congrats! You Scored { weirdnessScore } out of 10 on the Weirdness Scale!</h4>

			<div>
				<Link 
					to="/"
					className="bg-gray-300 px-2 py-1 mx-4"
				>Go Back
				</Link>

				<Link 
					to="/"
					onClick={ resetApp }
					className="bg-green-800 text-white px-2 py-1 mx-4"
				>
					Start Over
				</Link>
			</div>

			<LikesList from="results" />
			
		</main>
	)
}

function mapStateToProps( state ){
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, { resetLikes, resetSearch } )( Results );