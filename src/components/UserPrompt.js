import React from 'react';
import { connect } from 'react-redux';

import CalculateResultsButton from './CalculateResultsButton';


const UserPrompt = props => {
	const { likes } = props;

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
			<h4
				className="text-center text-2xl"
			>Search for GIFs</h4>
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