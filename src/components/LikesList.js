import React from 'react';
import { connect } from 'react-redux';

//actions
import { unlikeGif } from '../store/actions/likes';

// components
import LikesListitemText from './LikesListitemText';
import LikesListitemDeleteButton from './LikesListitemDeleteButton';

const LikesList = props => {
	const { likes, unlikeGif, from } = props;

	return(
		<ul 
			className="flex flex-wrap w-full"
		>
			{ likes.map( gif => 
				<li 
					key={ gif.gifSrc }
					className="flex items-center w-full justify-between my-2 relative"
				>
					< LikesListitemText
						title={ gif.title }
						searchTerm={ gif.searchTerm }
						weirdness={ gif.weirdness }
						from={ from }
					/>

					<img 
						src={ gif.stillSrc } 
						alt={ gif.title !== "" ? gif.title : "Title and description missing." } 
						className="w:1/4"
					/>

					{ from === "likes" &&
						<LikesListitemDeleteButton
							unlikeGif={ unlikeGif }
							gifSrc={ gif.gifSrc }
						/>
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