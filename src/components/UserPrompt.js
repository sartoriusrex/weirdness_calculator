import React from 'react';
import { connect } from 'react-redux';

import CalculateResultsButton from './CalculateResultsButton';
import ProgressIndicator from './ProgressIndicator';

const UserPrompt = props => {
	const { likes } = props;

	// let users know how many more GIFs they need to like. Once they've reached 5, display a message with the Calculate Result Button
	function displayPrompt(){
		if( likes.length === 5 ){
			return(
				<div 
					className="flex flex-col items-center"
				>
					<h4 className="text-center text-2xl mb-4"
					>You've liked 5 GIFs! You can now calculate your Weirdness Score!</h4>

					<CalculateResultsButton />
				</div>
			)
		}
		return(
			<ProgressIndicator />
		)
	}

	return(
		displayPrompt()
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes,
	})
}

export default connect( mapStateToProps, {} )( UserPrompt );