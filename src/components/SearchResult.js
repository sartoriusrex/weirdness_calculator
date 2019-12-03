import React from 'react';
import { connect } from 'react-redux';

//Components
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import NoResult from '../components/NoResult';
import LikeButton from '../components/LikeButton';

const SearchResult = props => {
	const { searchTerm, title, gifSrc, loading, errors, likes } = props;
	const noresult = "No Results Found";

	return(
		<article className="flex flex-col items-center">
			<h2 
				className="text-2xl mb-4"
			>Your Result</h2>

			<div className="p-2 my-2 flex flex-col items-center justify-center border border-solid border-gray-300 min-h-full w-full">

				{/* If there are errors */}
				{ errors && <ErrorIndicator /> }

				{/* Loading state */}
				{ loading && <LoadingIndicator /> }

				{/* Search results will come back with status 200, but without data. In that case, we manually set title and searchTerm to indicate no results */}
				{ title === noresult && searchTerm === noresult &&
					<NoResult />
				}

				{/* On initialize and reinitialize */}
				{ !searchTerm && !loading && <h4>Search for a gif</h4> }

				{/* Sometimes a search result will not have a title, but will have a gif src url. We can display that */}
				{ gifSrc && 
					!loading &&
					<>
						<h4>{ title }</h4>
						{ gifSrc !== "" &&
							<img 
								src={ gifSrc } 
								alt={ title || "Title and description are missing" } 
							/>
						}
					</>
				}

			</div>

			{ likes.length === 5 && <h4>You've liked 5 GIFs! You can now calculate your Weirdness Score!</h4>}

			<LikeButton />

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
		likes: state.likes
	}
}

export default connect( mapStateToProps, {} )( SearchResult );