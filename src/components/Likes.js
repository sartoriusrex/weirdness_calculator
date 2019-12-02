import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LikesList from './LikesList';

const Likes = props => {
	const { likes } = props;

	return(
		<article>
			<h2>Your Liked GIFs</h2>
			
			<LikesList />

			{ `You must like ${ 5 - likes.length } more GIFs to calculate your score.`}

			{ likes.length === 5 &&
				<Link to="/results">
					Calculate Results
				</Link>
			}
		</article>
	)
}

function mapStateToProps( state ) {
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, {  } )( Likes );