import React from 'react';
import { connect } from 'react-redux';

const ProgressIndicator = props => {
	const { likes } = props;

	return(
		<p 
			className="text-center text-2xl mb-4"
		>Like { 5 - likes.length } more GIFs to calculate your Weirdness.</p>
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes
	})
}

export default connect( mapStateToProps, {} )( ProgressIndicator );