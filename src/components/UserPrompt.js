import React from 'react';
import { connect } from 'react-redux';

const UserPrompt = props => {
	const { likes } = props;

	return(
		<h4
			className="text-center text-2xl"
		>
			{ likes.length === 5 ? 
			"You've liked 5 GIFs! You can now calculate your Weirdness Score!" : 
			"Search for GIFs" }
		</h4>
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes,
	})
}

export default connect( mapStateToProps, {} )( UserPrompt );