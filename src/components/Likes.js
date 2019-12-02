import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { unlikeGif } from '../store/actions/likes';

const Likes = props => {
	const { likes, unlikeGif } = props;

	function deleteGifFromList( gifSrc ){
		unlikeGif( gifSrc );
	}

	return(
		<article>
			<h2>Your Liked GIFs</h2>
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

			{ likes.length === 5 &&
				<Link to="/results">
					Calculate Results
				</Link>
			}
		</article>
	)
}

function mapStateToProps( state ) {
	return{
		likes: state.likes
	}
}

export default connect( mapStateToProps, { unlikeGif } )( Likes );