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
		<main>
			<h1>These are your results</h1>

			<h4>Congrats! You Scored { weirdnessScore } out of 10 on the Weirdness Scale!</h4>

			<LikesList from="results" />

			<Link to="/">
				Go Back
			</Link>

			<Link to="/">
				<button
					onClick={ resetApp }
				>
					Start Over
				</button>
			</Link>
		</main>
	)
}

function mapStateToProps( state ){
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, { resetLikes, resetSearch } )( Results );