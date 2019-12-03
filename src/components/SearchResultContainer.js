import React from 'react';
import { connect } from 'react-redux';

//Components
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import NoResult from '../components/NoResult';
import SearchResult from '../components/SearchResult';
import UserPrompt from '../components/UserPrompt';


const SearchResultContainer = props => {
	const { searchTerm, title, gifSrc, loading, errors } = props;
	const noresult = "No Results Found";

	return(
		!searchTerm && !loading ? //On Initialize and reinitialize

		<UserPrompt /> :

		<article className="flex flex-col items-center min-h-full">
			<div className="my-2 flex flex-col items-center justify-center min-h-1/2 w-full">

				{/* If there are errors */}
				{ errors && <ErrorIndicator /> }

				{/* Loading state */}
				{ loading && <LoadingIndicator /> }

				{/* Search results will come back with status 200, but without data. In that case, we manually set title and searchTerm to indicate no results */}
				{ title === noresult && searchTerm === noresult &&
					<NoResult />
				}

				{/* Sometimes a search result will not have a title, but will have a gif src url. We can display that */}
				{ gifSrc && !loading && <SearchResult /> }

			</div>

		</article>
	)
}

function mapStateToProps( state ) {
	return {
		searchTerm: state.searchResult.searchTerm,
		title: state.searchResult.title,
		gifSrc: state.searchResult.gifSrc,
		loading: state.loading,
		errors: state.errors,
	}
}

export default connect( mapStateToProps, {} )( SearchResultContainer );