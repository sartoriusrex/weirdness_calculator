import React from 'react';
import { connect } from 'react-redux';

import { unlikeGif } from '../store/actions/likes';

const LikesList = props => {
	const { likes, unlikeGif } = props;

	function deleteGifFromList( gifSrc ){
		unlikeGif( gifSrc );
	}

	return(
		<ul>
			{ likes.map( gif => 
				<li key={ gif.gifSrc }>
					<h4>{ gif.title }</h4>
					<img 
						src={ gif.stillSrc } 
						alt={ gif.title } 
					/>
					<button
						onClick={ () => deleteGifFromList( gif.gifSrc ) }
					>x</button>
				</li>
			)}
		</ul>
	)
}

function mapStateToProps( state ) {
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, { unlikeGif } )( LikesList );