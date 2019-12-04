import React from 'react';
import { connect } from 'react-redux';

//Components
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import SearchResult from '../components/SearchResult';
import UserPrompt from '../components/UserPrompt';


const SearchResultContainer = props => {
	const { searchResult, loading, errors } = props;

	function displaySearchResult(){
		if( !loading && searchResult !== "" && !errors ){
			return <SearchResult />
		}
		return <UserPrompt />
	}

	return(
		<article className="flex flex-col items-center min-h-full">
			<div className="my-2 flex flex-col items-center justify-center min-h-1/2 w-full">

				{ errors && <ErrorIndicator error={ errors } /> }

				{ loading && <LoadingIndicator /> }

				{ displaySearchResult() }

			</div>

		</article>
	)
}

function mapStateToProps( state ) {
	return {
		searchResult: state.searchResult,
		loading: state.loading,
		errors: state.errors,
	}
}

export default connect( mapStateToProps, {} )( SearchResultContainer );