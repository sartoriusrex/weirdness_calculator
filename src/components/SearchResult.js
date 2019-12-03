import React from 'react';
import { connect } from 'react-redux';

import LikeButton from '../components/LikeButton';

const SearchResult = props => {
	const { title, gifSrc } = props;

	return(
		<section>
			<LikeButton />


				<h4>{ title }</h4>
				{ gifSrc !== "" &&
					<img 
						src={ gifSrc } 
						alt={ title || "Title and description are missing" } 
					/>
				}

		</section>
	)
}

function mapStateToProps( state ){
	return({
		title: state.searchResult.title,
		gifSrc: state.searchResult.gifSrc,
	})
}

export default connect( mapStateToProps, {} )( SearchResult );