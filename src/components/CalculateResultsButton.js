import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CalculateResultsButton = props => {
	const { } = props;

	return(
		<Link to="/results">
			Calculate Results
		</Link>
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes
	})
}

export default connect( mapStateToProps, {} )( CalculateResultsButton );