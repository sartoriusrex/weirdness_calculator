import React from 'react';

export default function LikesListitemDeleteButton( props ) {
	const { unlikeGif, gifSrc } = props;

	return(
		<button
			onClick={ () => unlikeGif( gifSrc ) }
			className="flex items-center justify-center bg-red-700 text-white w:1/4 p-2 absolute top-0 right-0"
		>x</button>
	)
}