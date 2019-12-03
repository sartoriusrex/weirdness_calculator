import React from 'react';
import { connect } from 'react-redux';

import LikeButton from '../components/LikeButton';

const SearchResult = props => {
	const { searchTerm, title, gifSrc, loading, errors, likes } = props;

	return(
		<article>
			<h2>Your Result</h2>

			{/* If there are errors */}
			{ errors && <h4>Sorry, something went wrong. Please try your search again</h4> }

			{/* Loading state */}
			{ loading && <h4>Loading. Please wait one moment.</h4> }

			{/* On initialize and reinitialize */}
			{ !searchTerm && !loading && <h4>Search for a gif</h4> }

			{/* Search results will come back with status 200, but without data. In that case, we manually set title and searchTerm to indicate no results */}
			{ title === "No Results Found" &&
				searchTerm === "No Results Found" &&
				<h4>No Results Found</h4>
			}

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

			{ likes.length === 5 && <h4>You can now calculate your Weirdness Score!</h4>}

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