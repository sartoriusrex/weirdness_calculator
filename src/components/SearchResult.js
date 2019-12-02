import React from 'react';
import { connect } from 'react-redux';

import LikeButton from '../components/LikeButton';

const SearchResult = props => {
	const { title, gifSrc, loading, errors } = props;

	return(
		<article>
			<h2>Your Result</h2>

			{/* If there are errors */}
			{ errors &&
				<h4>Sorry, something went wrong. Please try your search again</h4>
			}

			{/* On initialize */}
			{ !gifSrc && !
				loading &&
				<p>Search for a gif</p>
			}

			{ loading &&
				<p>...loading</p>
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

			<LikeButton />
		</article>
	)
}

function mapStateToProps( state ) {
	return {
		title: state.searchResult.title,
		gifSrc: state.searchResult.gifSrc,
		loading: state.loading,
		errors: state.errors
	}
}

export default connect( mapStateToProps, {} )( SearchResult );