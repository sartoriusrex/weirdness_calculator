import React from 'react';
import { connect } from 'react-redux';

import { unlikeGif } from '../store/actions/likes';

const LikesList = props => {
	const { likes, unlikeGif, from } = props;

	return(
		<ul>
			{ likes.map( gif => 
				<li key={ gif.gifSrc }>
					<h4>{ gif.title }</h4>
					<img 
						src={ gif.stillSrc } 
						alt={ gif.title ? gif.title : "Title and description missing." } 
					/>

					{/* "from" prop passed down from Parent. If Results Page is parent, show weirdness score and not the delete button */}
					{ from === "results" ? 
						<p>{ gif.weirdness } / 10</p>
						:
						<button
							onClick={ () => unlikeGif( gif.gifSrc ) }
						>x</button>
					}
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