import React from 'react';
import { connect } from 'react-redux';

// style
import './SearchSubmitButton.css';


const SearchSubmitButton = props => {
	const { likes } = props;

	function disableSubmit(){
		if( likes.length === 5 ){
			return true
		}
		return false
	}

	return(
		<button 
			type="submit"
			className="search-button bg-purple-800 text-white w-full md:w-1/4 py-2"
			disabled={ disableSubmit() }
		>Search</button>
	)
}

function mapStateToProps( state ){
	return({
		likes: state.likes
	})
}

export default connect( mapStateToProps, {} )( SearchSubmitButton );