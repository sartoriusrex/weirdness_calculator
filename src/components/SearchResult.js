import React from 'react';
import { connect } from 'react-redux';

const SearchResult = props => {
	const { title, gifSrc, loading } = props;

	return(
		<>
			<h2>Your Result</h2>
			{ !title && !loading &&
				<p>Search for a gif</p>
			}
			{ loading &&
				<p>...loading</p>
			}
			{ title &&
				<>
					<h4>{ title }</h4>
					<img src={ gifSrc } alt={ title } />
				</>
			}
		</>
	)
}

function mapStateToProps( state ) {
	return {
		title: state.searchResult.title,
		gifSrc: state.searchResult.gifSrc,
		loading: state.loading
	}
}

export default connect( mapStateToProps, {} )( SearchResult );