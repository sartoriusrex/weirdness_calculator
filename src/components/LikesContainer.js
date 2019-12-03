import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LikesList from './LikesList';

const LikesContainer = props => {
	const { likes } = props;

	return(
		<article>
			<h2>Your Liked GIFs</h2>

			{/* If the length of the likes list is not 5, then show user how many more gifs they need to like. Otherwise show them the link to calculate their results and navigate them to results page */}
			{ likes.length !== 5 ? 
				`You must like ${ 5 - likes.length } more GIFs to calculate your score.` 
				:
				<Link to="/results">
					Calculate Results
				</Link>
			}

			<LikesList from="likes" />

		</article>
	)
}

function mapStateToProps( state ) {
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, {  } )( LikesContainer );